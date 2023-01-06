import React from 'react'
import { useDispatch } from 'react-redux'
export const ProductSummaryCard = ({ product }) => {
  return (
    <div className='flex p-1 sm:p-2 border-b border-b-gray-200'>
        <div className="product-image border border-gray-200 rounded-lg w-full sm:w-1/3">
            <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p className='text-gray-600'>{product.description}</p>
        </div>
        <div className="product-price-qt flex flex-col items-center justify-center">
            <div className='price'>{`${product.price}`}</div>
            <div className="quantity flex ">
                <button className='p-1' disabled={product.amount <= 0} onClick={() => console.log('decrement')}>-</button>
                <span className='p-1' >{product.amount}</span>
                <button className='p-1' disabled={product.amount <= 0} onClick={() => console.log('increment')}>+</button>
            </div>
        </div>
    </div>
  )
}
