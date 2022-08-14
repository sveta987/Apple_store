import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addItem, removeItem} from '../../store/cartSlice';

import "./detail.css"

const Detail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(()=>{
        fetch('http://localhost:3000/Products/' + id)
        .then(response => response.json())
        .then(json => {
            setDetail(json);
        })
        .catch(error => console.log(error))},
    []);
      
    const handleCart = (detail)=>{
        if(cartBtn ==="Add to Cart"){
            dispatch(addItem(detail));
            setCartBtn("Remove from Cart")
        }
        else{
            // window.localStorage.removeItem("elem");
            dispatch(removeItem(detail));
            setCartBtn("Add to Cart");
        }
    }

    return (
        <div className='Detail'>
            <button onClick={() => navigate(-1)}>GO BACK</button>
           <div className="container">
            {
                detail &&
                <div className='inner'>
                    <div className="image">
                        <img src={detail.image} alt="" />
                    </div>
                    <div className="box">
                        <h2>Model: {detail.model}</h2>
                        <h3>Category: {detail.category}</h3>
                        <h4>Price: {detail.price} $</h4>
                        <button onClick={()=>handleCart(detail)} className="detail-btn">{cartBtn}</button>
                    </div>
                </div>
            }
           </div>
        </div>
    )
}

export default Detail