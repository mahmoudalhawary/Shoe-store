import { useState, useEffect } from 'react'
import shopCartData from '../db/shopCard.js'

function Shopcart () {
  const [shopCart, setShopCart] = useState([])

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem('shopCard')) || shopCartData
    setShopCart(savedCart)
  }, [])

  const saveCart = cart => {
    localStorage.setItem('shopCard', JSON.stringify(cart))
    useEffect
  }

  const removeItem = index => {
    const updatedCart = [...shopCart]
    updatedCart.splice(index, 1)
    setShopCart(updatedCart)
    saveCart(updatedCart)
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {shopCart.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle h-12 w-12'>
                        <img src={item.img} alt={item.title} />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>{item.title}</div>
                      <div className='text-sm opacity-50'>
                        <span>{item.reviews}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{item.newPrice}</span>
                </td>
                <td>
                  <button
                    className='btn btn-danger hover:bg-red-700'
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {shopCart.length === 0 && <p>Your cart is empty.</p>}
      </div>
    </>
  )
}

export default Shopcart
