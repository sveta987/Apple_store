import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react';

const CategoryItem = ({item, categoryName, getCategoryName}) => {
    

  return (
    <div className='CategoryItem' id={item.CategoryName} >
        <img src={item.image} />
        <h3> {item.CategoryName}</h3>
        <Link className='btn' to={{ pathname: "/category/"  + item.CategoryName
        }} onClick={()=>getCategoryName() }> Watch {item.CategoryName}...  </Link>
    </div> 

  )
}

export default CategoryItem


