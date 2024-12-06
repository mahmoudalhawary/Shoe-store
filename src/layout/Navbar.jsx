import PropTypes from 'prop-types'
import shopCart from '../db/shopCard.js'
import { useState } from 'react'

const Navbar = ({ handleSearch, queryCategory }) => {
  const [toggle, setToggle] = useState(true)
  const [Shoptoggle, setShopToggle] = useState(true)

  const ToggleSidepar = () => {
    document.querySelector('.btnSideBar').classList.toggle('hidden')

    setToggle(false)
  }

  // hide sidebar when clicking outside of sidebar
  const SideBar = document.getElementById('SideBar')
  const SideBar2 = document.getElementById('SideBar2')
  // if (!toggle) {
  document.addEventListener('click', event => {
    const isClickInsideSideBar2 = SideBar2.contains(event.target)
    const isClickInsideSideBar = SideBar.contains(event.target)

    if (!isClickInsideSideBar && !isClickInsideSideBar2 && !toggle) {
      SideBar.classList.add('hidden')
      console.log('SideBar')
      console.log(toggle)
      setToggle(true)
    }
  })

  // hide shopCart when clicking outside of sidebar

  const ShopCartToggle = document.getElementById('ShopCartToggle')
  const ShopCartToggle2 = document.getElementById('ShopCartToggle2')
  document.addEventListener('click', event => {
    const isClickInsideShopCart2 = ShopCartToggle2.contains(event.target)
    const isClickInsideShopCart = ShopCartToggle.contains(event.target)

    if (!isClickInsideShopCart && !isClickInsideShopCart2 && !Shoptoggle) {
      ShopCartToggle.classList.add('hidden')
      console.log('ShopCartToggle')
      console.log(toggle)
      setToggle(true)
    }
  })
  const ToggleShopCart = () => {
    document.querySelector('.ShopCart').classList.toggle('hidden')
    setShopToggle(false)
  }

  const totalPrice = () => {
    let total = 0

    shopCart.forEach(item => {
      total += parseFloat(item.newPrice)
      console.log('price' + item.newPrice + '..........' + total)
    })

    return total
  }
  return (
    <>
      <div
        id='SideBar2'
        className='navbar bg-base-200   flex  space-x-4 justify-evenly '
      >
        <button
          className='md:hidden block btn btn-square btn-ghost'
          onClick={() => ToggleSidepar()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>

        <div className='flex-1'>
          <a className='btn btn-ghost text-xl ps-6'>SHOE_STORE</a>
        </div>
        <div className='form-control md:w-2/12 w-2/12 '>
          {/* <input
            type='text'
            placeholder='ss'
            onChange={handleSearch}
            value={queryCategory}
            className='input input-bordered sm:w-24 w-20 hover:w-30  md:w-auto'
          />      */}
          <label className='input input-bordered flex items-center gap-2  sm:w-24 w-20 hover:w-30  md:w-auto'>
            <input
              type='text'
              className='grow'
              placeholder='Search'
              value={queryCategory}
              onChange={handleSearch}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
        {/* start change mode button  */}
        <label className='swap swap-rotate'>
          {/* this hidden checkbox controls the state */}
          <input
            type='checkbox'
            className='theme-controller'
            value='synthwave'
          />

          {/* sun icon */}
          <svg
            className='swap-off h-10 w-10 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
          </svg>

          {/* moon icon */}
          <svg
            className='swap-on h-10 w-10 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
        {/* end change mode button  */}

        <div className='flex-none pe-4'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'
            >
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>
                  {shopCart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'
            >
              <div className='card-body'>
                <span className='text-lg font-bold'>
                  {shopCart.length}
                  Items
                </span>
                <span className='text-info'>Subtotal:{totalPrice()}</span>
                <div id='ShopCartToggle2' className='card-actions'>
                  <button
                    onClick={() => ToggleShopCart()}
                    className='btn btn-primary btn-block'
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
Navbar.propTypes = {
  handleSearch: PropTypes.string.isRequired,
  queryCategory: PropTypes.string.isRequired
}

export default Navbar
