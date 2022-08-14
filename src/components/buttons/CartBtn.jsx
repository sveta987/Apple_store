import React from 'react'
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'




const CartBtn = () => {
  const elem = useSelector(state=> state.cart.cart);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ">
        <span className='fa fa-shopping-cart'> Cart ({elem.length})  </span> 
      </NavLink>
    </>
  )
}

export default CartBtn