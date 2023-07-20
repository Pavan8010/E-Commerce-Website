import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
const CartItem = ({id,name,image,color,price,amount}) => {
  const setDecrease = ()=>{
    // amount > 1 ? setAmount(amount-1) : setAmount(1);
  }
  const setIncrease = ()=>{
    // amount < stock ? setAmount(amount+1) : setAmount(stock);
  }
  return (
    <div className='cart_heading grid grid-five-column'>
      {/* fist column */}
      <div className="cart-image--name">
        <div>
          <figure>
              <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div 
              className="color-style" 
              style={{backgroundColor:color,color:color}}
              ></div>
          </div>
        </div>
      
      </div>

      {/* second column */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price}/>
        </p>
      </div>

      {/* third column */}
      <CartAmountToggle
      amount={amount}
      setDecrease={setDecrease}
      setIncrease={setIncrease}
      />

      {/* fourth column */}
      <div className="cart-hide">
        <p>
            <FormatPrice price={price*amount}/>
        </p>
      </div>

      {/* fifth column */}
      <div>
        <FaTrash className="remove_icon" />
      </div>
    </div>
  )
}

export default CartItem
