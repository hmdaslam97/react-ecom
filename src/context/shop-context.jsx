import React, { createContext } from 'react'
import { useState } from 'react'
import {ProductsData} from '../ProductsData'

export const ShopContext = createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<ProductsData.length+1;i++)
    {
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }

    const getTotalAmount=()=>{
        let totalAmount=0,count=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                count++
                let itemInfo=ProductsData.find((product)=>
                {
                    return product.id===Number(item)
                })
                totalAmount+=cartItems[item]*itemInfo.price;
            }
        }
        // console.log(count)
        return {totalAmount,count};
    }

    const contextValue={cartItems,addToCart,removeFromCart, updateCartItemCount, getTotalAmount}

    // console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export const noOfItems=()=>{

}