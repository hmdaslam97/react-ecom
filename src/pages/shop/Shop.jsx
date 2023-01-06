import React from 'react'
import {ProductsData} from '../../ProductsData'
import { Products } from './Products'
import './Shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
      </div>
      
      <div className="products">
        {ProductsData.map((item)=>(
        <Products data={item}/>
        ))}
      </div>
    </div>
  )
}


