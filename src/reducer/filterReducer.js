const filterReducer = (state,action)=>{
  switch(action.type){

    case 'LOAD_FILTER_PRODUCTS':

      let priceArray = action.payload.map((currElem) => {
        return currElem.price;
      })
      // console.log(priceArray)
      // 1st way
      // let maxPrice = priceArray.reduce(
      //   (initialVal, currElem) => Math.max(initialVal, currElem)
      //   ,0 
      // )

      // 2nd way
      let maxPrice = Math.max(...priceArray);
      // console.log("🚀",maxPrice)

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
    }    
    
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
    };
    
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
    }

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return{
        ...state,
        sorting_value : action.payload,
    }

    case "SORTING_PRODUCTS":
      let newSortData ;
      // let tempSortProducts = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const{name,value} = action.payload;
      return{
        ...state,
        filters :{
          ...state.filters,
          [name]:value,
        }
    }
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text,category,company,color,price } = state.filters;
      if(text){
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }
      if(category !== "all"){
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.category === category;
        });
      }

      if(company !== "all"){
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if(color !== "all"){
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.colors.includes(color);
        });
      }
      if(price===0){
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.price === price;
        });
      }
      else{
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
    };
    
    
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          
        }
      }
    default:
      return state
  }
}
export default filterReducer;