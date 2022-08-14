// import React, { useEffect } from 'react'; 
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux'; 
import { NavLink } from 'react-router-dom'; 
import { removeItem,incQuantity,decQuantity } from '../../store/cartSlice'; 
import "./cart.css" 
 
const Cart = () => { 
    const elems = useSelector(state => state.cart.cart); 
    const dispatch = useDispatch(); 
 
    // useEffect(() => { 
 //  const todos = JSON.parse(localStorage.getItem('elems')); 
 //  if (todos) { 
 //   setTodos(todos); 
 //  } 
 // }, []); 
 
 
    const handleClose = (item) => { 
        dispatch(removeItem(item)); 
    } 

    const cartItems = (cartItem) => { 
        return ( 
            <div className='cart'> 
                 
                <div className="container" key={cartItem.id}> 
                    <div className='inner'> 
                    <button className='close' onClick={() => handleClose(cartItem)}><i className='fa fa-close' /></button> 
                        <div className="image"> 
                            <img src={cartItem.image} alt="" /> 
                        </div> 
                        <div className="box"> 
                            <h3>{cartItem.model}</h3> 
                        </div> 
                        <div className="button-box">  
                            <div className="content"> 
                                <h4>$ {cartItem.price}</h4>     
                                <button onClick={() => dispatch(decQuantity(cartItem))}>-</button> 
                                <span>{Number(cartItem.quantity)}</span> 
                                <button onClick={() => dispatch(incQuantity(cartItem))}>+</button> 
                                = {cartItem.price * Number(cartItem.quantity)} 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
 
        ) 
 
    } 
 
    const emptyCart = () => { 
        return ( 
            <div className="container"> 
                <h3>Your Cart is Empty</h3> 
            </div> 
        ) 
    } 
 
    const checkout = () => { 
        return ( 
            <div className="checkout"> 
                <NavLink to="/checkout" className="checkout-btn">CHECKOUT</NavLink> 
            </div> 
        ) 
    } 
 
    return ( 
        <> 
            {elems.length === 0 && emptyCart()} 
            {elems.length !== 0 && elems.map(cartItems)} 
            {elems.length !== 0 && checkout()} 
        </> 
    ) 
} 
 
export default Cart