import React from 'react'
import CategoryItem from '../CategoryItem'
import './Categories.css'

const Categories = ({categories,categoryName, getCategoryName }) => {
  return (
    
    <div className='categories'>
      <div className="container">
        <h2 className='title'>Categories</h2>
        <div className="inner">
        {categories.map((el, index)=>{
        return <CategoryItem key={index} item={el} categoryName={categoryName} getCategoryName={getCategoryName} /> 
        })
        
        }
        </div>
      </div>
    </div>
  )
}

export default Categories