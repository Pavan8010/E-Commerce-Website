const cartReducer = (state,action) => {

    if(action.type === "ADD_TO_CART"){
      let {id,color,amount,product} = action.payload;
      // tackle the existing item
      let existingItem = state.cart.find((curritem)=> curritem.id === id+color);
      if(existingItem){
        let updatedProduct = state.cart.map((currElem)=>{
        if(currElem.id===id+color){
          let newAmount = currElem.amount + amount;
          if(newAmount >= currElem.max){
            newAmount = currElem.max;
          }
          return{
            ...currElem,
            amount : newAmount,
          }
        }else{
          return currElem;
        }
        })
        return{
          ...state,
          cart : updatedProduct,
        }
      }else{
        let cartProduct = {
            id : id+color,
            name : product.name,
            color,
            amount,
            price : product.price,
            image : product.image[0].url,
            max : product.stock,
        }
        return{
            ...state,
            cart : [...state.cart,cartProduct],
        }
      }
    }

    if(action.type==="SET_INCREMENT"){
        let updatedProduct = state.cart.map((currElem)=>{
            if(currElem.id===action.payload){
                let incAmount = currElem.amount+1;
                if(incAmount>=currElem.max){
                    incAmount = currElem.max;
                }
                return{
                    ...currElem,
                    amount:incAmount,
                }
            }else{
                return currElem;
            }
        })
        return{
            ...state,
            cart: updatedProduct
        }
    }

    if(action.type==="SET_DECREMENT"){
        let updatedProduct = state.cart.map((currElem)=>{
            if(currElem.id===action.payload){
                let decAmount = currElem.amount - 1;
                if(decAmount <= 1){
                    decAmount = 1;
                }
                return{
                    ...currElem,
                    amount : decAmount,
                }
            }else{
                return currElem;
            }
        })
        return{
            ...state,
            cart : updatedProduct,
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let id = action.payload;
        let updatedCart = state.cart.filter((curritem)=> curritem.id !== id)
        return{
          ...state,
          cart : updatedCart,
        }
    }

    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart : [],
        }
    }

    // if(action.type === "CART_TOTAL_ITEM"){
    //     let updatedTotalItem = state.cart.reduce((acc,currElem)=>{
    //         let {amount} = currElem;
    //         acc += amount;
    //         return acc;
    //     },0);
    //     return{
    //         ...state,
    //         total_item : updatedTotalItem,
    //     }
    // }
    // if(action.type==="CART_TOTAL_PRICE"){
    //     let updatedTotalPrice = state.cart.reduce((acc,currElem)=>{
    //         let {price,amount} = currElem;
    //         acc += (price*amount);
    //         return acc;
    //     },0)
    //     return{
    //         ...state,
    //         total_price:updatedTotalPrice,
    //     }
    // }
    
    if(action.type==="CART_TOTAL_ITEM_PRICE"){
        let {total_item,total_price} = state.cart.reduce((acc,currElem)=>{
            let {price,amount} = currElem;
            acc.total_item += amount;
            acc.total_price += (price*amount);
            return acc;
        },{
            total_item : 0,
            total_price : 0,
        })
        return{
            ...state,
            total_item,
            total_price,
        }
    }
    return state;
}

export default cartReducer
