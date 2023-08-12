import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let parsedData = [];
  try {
    let localCartData = localStorage.getItem("Mycart");
    const parsedData = JSON.parse(localCartData);
  } catch (e) {
    console.log(e);
    // expected output: SyntaxError: Unexpected token o in JSON at position 1
  }
  if(!Array.isArray(parsedData)){
    return [];
  }
  else{
    return parsedData;
  }

const initialState = {
  cart : getLocalCartData(),
  total_item:"",
  total_price:"",
  shipping_fee:5000,
}
const CartProvider = ({ children }) => {
const [state,dispatch] = useReducer(reducer,initialState); 

const addToCart = (id, color, amount, product) => {
  dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
}

const setIncrease = (id)=>{
  dispatch({type:"SET_INCREMENT",payload:id})
}
const setDecrease = (id)=>{
  dispatch({type:"SET_DECREMENT",payload:id})
}

const removeItem = (id) => {
  dispatch({type:"REMOVE_ITEM",payload:id})
}

const clearCart = () => {
  dispatch({type:"CLEAR_CART"})
}

// to add the data in local storage
// get and set 
useEffect(() => {
  // dispatch({type:"CART_TOTAL_ITEM"})
  // dispatch({type:"CART_TOTAL_PRICE"})
  dispatch({type:"CART_TOTAL_ITEM_PRICE"})

  localStorage.setItem("MyCart",JSON.stringify(state.cart));
}, [state.cart])


return <CartContext.Provider 
    value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>
    {children}
    </CartContext.Provider>;
}

const useCartContext = () => {
  return useContext(CartContext);
}

export {CartProvider ,useCartContext};

