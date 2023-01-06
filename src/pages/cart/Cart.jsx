import React, { useContext } from 'react'
import { ProductsData } from '../../ProductsData'
import { ShopContext } from '../../context/shop-context'
import {CartItem} from './CartItem.jsx'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const {cartItems, getTotalAmount}=useContext(ShopContext)
  const {totalAmount}=getTotalAmount()
  const navigate=useNavigate() 

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className='cartItems'>
        {ProductsData.map((product)=>{
          if(cartItems[product.id]!==0)
          {
            console.log(cartItems[product])
            return <CartItem data={product}/>;
          }
        })}
      </div>
      {totalAmount>0?
      <div className="checkout">
        <p>Subtotal Rs. {totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        {/* <button>Checkout</button> */}
      </div>:
      (<h1>Your Cart is Empty!</h1>)
      }
    </div>
  )
}

