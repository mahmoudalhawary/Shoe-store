import { useState } from 'react'
import PropTypes from 'prop-types'
import Shopcart from './shopcart'

const Products = ({ result, handleCompanyChange }) => {
  const [activeButton, setActiveButton] = useState('') // تتبع الزر النشط

  const handleButtonClick = category => {
    setActiveButton(category) // تحديث الزر النشط
    handleCompanyChange(category) // استدعاء دالة الفلترة
  }

  return (
    <>
      {' '}
      <div id='ShopCartToggle' className='ShopCart hidden '>
        <Shopcart />
      </div>{' '}
      <div className='start-2 py-2'>
        <h3>Recommended</h3>
      </div>
      <div className='flex gap-1'>
        <button
          className={`btn w-auto    ${
            activeButton === '' ? 'active bg-base-300' : 'btn-outline'
          }`} // إذا كان الزر نشطًا أضف فئة "active"
          onClick={() => handleButtonClick('')}
        >
          All Products
        </button>
        <button
          className={`btn xl:w-1/12 sm:w-2/12    ${
            activeButton === 'Nike' ? 'active bg-base-300' : 'btn-outline'
          }`}
          onClick={() => handleButtonClick('Nike')}
        >
          Nike
        </button>
        <button
          className={`btn xl:w-1/12 sm:w-2/12    ${
            activeButton === 'Adidas' ? 'active bg-base-300' : 'btn-outline'
          }`}
          onClick={() => handleButtonClick('Adidas')}
        >
          Adidas
        </button>
        <button
          className={`btn xl:w-1/12 sm:w-2/12    ${
            activeButton === 'Puma' ? 'active bg-base-300' : 'btn-outline'
          }`}
          onClick={() => handleButtonClick('Puma')}
        >
          Puma
        </button>
        <button
          className={`btn xl:w-1/12 sm:w-2/12    ${
            activeButton === 'Vans' ? 'active bg-base-300' : 'btn-outline'
          }`}
          onClick={() => handleButtonClick('Vans')}
        >
          Vans
        </button>
      </div>
      <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 p-4'>
        {/* <progress
          className='progress progress-success w-56'
          value='4'
          max='100'
        ></progress> */}

        {result}
      </div>
    </>
  )
}
Products.propTypes = {
  result: PropTypes.string.isRequired,
  handleCompanyChange: PropTypes.string.isRequired
}

export default Products
