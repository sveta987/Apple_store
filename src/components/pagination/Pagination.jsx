import React from 'react'
import './pagination.css'

const Pagination = ({perPage, totalProducts, paginate}) => {
    const pageNumbers = [];
    
    for(let i = 1;i<= Math.ceil(totalProducts/perPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number =>(
                    <a  className='page-link' onClick={()=>paginate(number)}>{number}</a>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination