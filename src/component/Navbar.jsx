import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './Navbar.css'
import { ShopContext } from '../context/shop-context'

export const Navbar=()=> {

  const{getTotalAmount}=useContext(ShopContext)
  const {count}=getTotalAmount()

  return (
    <div className='navbar'>
        <h1 className='heading'>Ecom Store</h1>
        <div className="links">
            <Link to='/'>SHOP</Link>
            <Link to='/cart'>
                <div className="cartAlign"><ShoppingCart size={27}/><small>{count}</small></div>
            </Link>
        </div>
    </div>
  )
}
