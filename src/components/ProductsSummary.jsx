import React from 'react'
import { useSelector } from 'react-redux'
import { cartProducts } from '../store/cart/cartSlice'
export const ProductsSummary = () => {
    const cart = useSelector(cartProducts)
  return (
    <div className='flex flex-col' >
        {cart && cart?.map((product, index) => {
            return (
                <div></div>
            )
        } ) }
    </div>
  )
}
