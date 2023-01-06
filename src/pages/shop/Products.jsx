import React, { useContext } from "react"
import {ShopContext} from '../../context/shop-context'
import './Shop.css'


export const Products = (props) => {

  const {id,productName,price,productImage} =props.data

  const {addToCart,cartItems}=useContext(ShopContext)

  const cartItemAmount=cartItems[id]

  return (
    <div className="dispProduct">
        <img src={productImage} alt={productName}/>
        <div className="description">
          <p><b>{productName}</b></p>
          <p>Rs.{price}/-</p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

