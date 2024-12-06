import Navbar from './layout/Navbar'
import Sidebar from './layout/sidebar'
import data from './db/data'
import { useState } from 'react'
import Products from './componants/Products'
import Product from './componants/Product'

const App = () => {
  const Productss = data
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [queryCategory, setQueryCategory] = useState('')
  const [queryPrice, setQueryPrice] = useState(null)
  const [queryColor, setQueryColor] = useState(null)

  const handleCategoryChange = val => {
    setSelectedCategory(val)
  }
  const handleCompanyChange = val => {
    setSelectedCompany(val)
  }
  const handlePriceChange = val => {
    setQueryPrice(val)
  }
  const handleColorChange = val => {
    setQueryColor(val)
  }
  const handleSearch = e => {
    console.log(e.target.value)
    setQueryCategory(e.target.value)
  }
  function FilterDataa (queryCategory, selectedCategory) {
    let filterData = Productss
    if (queryCategory) {
      filterData = Productss.filter(product =>
        product.title.toLowerCase().includes(queryCategory.toLowerCase())
      )
    }
    if (selectedCategory) {
      filterData = filterData.filter(
        ({ category }) => category === selectedCategory
      )
    }
    if (selectedCompany) {
      filterData = filterData.filter(
        ({ company }) => company === selectedCompany
      )
    }
    if (queryColor) {
      filterData = filterData.filter(({ color }) => color === queryColor)
    }
    if (queryPrice) {
      filterData = filterData.filter(({ newPrice }) => newPrice === queryPrice)
    }
    if (queryPrice) {
      filterData = filterData.filter(({ newPrice }) => newPrice === queryPrice)
    }

    return filterData.map(
      ({ img, title, reviews, prevPrice, newPrice, color }) => (
        <>
          <div className='shadow-md  border-2  rounded-md'>
            <Product
              key={Math.random()}
              img={img}
              title={title}
              reviews={reviews}
              prevPrice={prevPrice}
              newPrice={newPrice}
              color={color}
            />
          </div>
        </>
      )
    )
  }
  const result = FilterDataa(queryCategory, selectedCategory)
  return (
    <>
      <Navbar
        handleSearch={handleSearch}
        queryCategory={queryCategory}
        handleCategoryChange={handleCategoryChange}
        handleColorChange={handleColorChange}
        handlePriceChange={handlePriceChange}
      />

      <div className=' '></div>
      <div className='flex flex-wrap '>
        <div
          id='SideBar'
          className='w-1/2 z-10  sm:w-2/12  hidden md:block absolute sm:relative    bg-base-300  btnSideBar  '
        >
          <Sidebar
            handleCategoryChange={handleCategoryChange}
            handleColorChange={handleColorChange}
            handlePriceChange={handlePriceChange}
          />
        </div>
        <div className='min-h-screen w-screen md:w-10/12 bg-base-100   p-4'>
          <Products
            result={result}
            handleCompanyChange={handleCompanyChange}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </>
  )
}

export default App
