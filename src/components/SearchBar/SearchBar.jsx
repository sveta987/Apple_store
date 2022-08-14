import React from 'react'
import './SearchBar.css'

const SearchBar = ({searchHandler}) => {
  return (
    <div className='Search'>
        <input 
            type="text" 
            placeholder='Search Here...' 
            onChange={e=> searchHandler(e.target.value, 'strCategory')}
        />
    </div>
  )
}

export default SearchBar