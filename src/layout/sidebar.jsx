import PropTypes from 'prop-types'

const Sidebar = ({
  handleCategoryChange,
  handlePriceChange,
  handleColorChange
}) => {
  return (
    <>
      <div className=' h-screen   flex flex-col items-center mt-7 gap-4'>
        {/* caterory */}
        <div>
          {' '}
          <h1 className=''>🛒</h1>
          <h2 className='my-2 font-bold '>Category</h2>
          <ul className='gap-2 flex flex-col'>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='categry'
                className='radio radio-primary'
                defaultChecked
                onClick={() => handleCategoryChange('')}
              />
              <a href='#'>All</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='categry'
                className='radio radio-primary'
                onClick={() => handleCategoryChange('sneakers')}
              />
              <a href='#'>Sneakers</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='categry'
                className='radio radio-primary'
                onClick={() => handleCategoryChange('flats')}
              />
              <a href='#'>Flats</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='categry'
                className='radio radio-primary'
                onClick={() => handleCategoryChange('sandals')}
              />
              <a href='#'>Sandals</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='categry'
                className='radio radio-primary'
                onClick={() => handleCategoryChange('heels')}
              />
              <a href='#'>Heels</a>
            </li>
          </ul>
        </div>

        {/* Price */}
        <div>
          <h2 className='my-2 font-bold'>Price</h2>
          <ul className='gap-2 flex flex-col'>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='price-type'
                className='radio radio-primary'
                defaultChecked
                onClick={() => handlePriceChange('')}
              />
              <a href='#'>All</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='price-type'
                className='radio radio-primary'
                onClick={() => handlePriceChange('50')}
              />
              <a href='#'>$0-50</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='price-type'
                className='radio radio-primary'
                onClick={() => handlePriceChange('100')}
              />
              <a href='#'>$50-100</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='price-type'
                className='radio radio-primary'
                onClick={() => handlePriceChange('150')}
              />
              <a href='#'>$100-150</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='price-type'
                className='radio radio-primary'
                onClick={() => handlePriceChange('200')}
              />
              <a href='#'>Over $150</a>
            </li>
          </ul>
        </div>

        {/* Colors */}
        <div className=''>
          <h2 className='my-2 font-bold'>Colors</h2>
          <ul className='gap-2 flex flex-col'>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary box-decoration-clone bg-gradient-to-r from-yellow-400 to-blue-500'
                defaultChecked
                onChange={() => handleColorChange('')}
              />
              <a href='#'>
                <span className='checkbox-accent'> </span>All
              </a>
            </li>{' '}
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary bg-black'
                onChange={() => handleColorChange('black')}
              />
              <a href='#'>Black</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary bg-green-400'
                onChange={() => handleColorChange('green')}
              />
              <a href='#'>Green</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary bg-blue-800'
                onChange={() => handleColorChange('blue')}
              />
              <a href='#'>Blue</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary bg-red-800'
                onChange={() => handleColorChange('red')}
              />
              <a href='#'>Red</a>
            </li>
            <li className='gap-2 flex'>
              <input
                type='radio'
                name='color'
                className='radio radio-primary bg-white'
                onChange={() => handleColorChange('white')}
              />
              <a href='#'>White</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
Sidebar.propTypes = {
  handleCategoryChange: PropTypes.string.isRequired,
  handlePriceChange: PropTypes.string.isRequired,
  handleColorChange: PropTypes.string.isRequired
}

export default Sidebar
