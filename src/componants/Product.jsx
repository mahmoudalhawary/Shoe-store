import PropTypes from 'prop-types'
import { BsFillBagFill } from 'react-icons/bs'
import { addToCart } from '../db/shopCard.js'
import { useEffect, useState } from 'react'

const Product = ({ img, title, reviews, prevPrice, newPrice, color }) => {
  const handleAddToCart = () => {
    addToCart(img, newPrice, title, reviews)
    useEffect
    useState
  }
  return (
    <>
      <div className='bg-base-100 border-spacing-1 shadow-xl  p-2 rounded-md'>
        <div className='h-72 bg-white  flex rounded-sm items-center justify-center  image  overflow-y-hidden  my-2  '>
          <img src={img} alt={title} className='' />
        </div>{' '}
        <h1 className='font-bold'>{title}</h1>
        <div className='flex justify-start gap-1'>
          <div className='grid grid-cols-4 '> </div>
          <div>{reviews}</div>
          <div>{color}</div>
        </div>
        <div className=' flex justify-between me-3'>
          <div className='flex justify-start gap-1'>
            <div className='text-red-500 line-through'>{prevPrice}</div>
            <div className='text-green-500'>{newPrice}</div>
          </div>
          <button className='bag' onClick={() => handleAddToCart()}>
            <BsFillBagFill className='bag-icon' />
          </button>
        </div>
      </div>
    </>
  )
}
Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  prevPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Product
