import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import ProductItem from '../ProductItem';


import './ProductList.css'

const ProductList = ({ product, perPage, currentPage}) => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    if (!product) {
        fetch('http://localhost:3000/Products')
            .then(response => response.json())
            .then(json => {
                setProducts(json);
            })
            .catch(error => console.log(error));
    }
    const newProducts = product ? product : products.filter(el => {
        if (name) return el.category === name;
        else return el;
    })

    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct- perPage;
    const currentProducts = indexOfLastProduct ? newProducts.slice(indexOfFirstProduct, indexOfLastProduct):newProducts;
    return (
        <>
        <button onClick={() => navigate('/')} className='navigate-button'>GO BACK</button>
        <div className='products'>
            <div className="container">
                {name && <h2 className= 'title-of-category'>{name}</h2>}
                <div className="inner">
                    {

                        currentProducts.map((el, index) => {
                            return <ProductItem key={index} item={el} />
                        })

                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductList