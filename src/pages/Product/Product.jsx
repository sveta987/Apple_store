import React, { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import "./Product.css"

import SearchBar from '../../components/SearchBar/SearchBar';
import ProductList from '../../components/ProductList/ProductList';
import Pagination from '../../components/pagination/Pagination';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchedProduct, setsearchedProduct] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('noFilter');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [active, setActive] = useState('');
  const [category, setCategory] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  // const indexOfLastProduct = currentPage * perPage;
  // const indexOfFirstProduct = indexOfLastProduct- perPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    fetch('http://localhost:3000/Products')
      .then(response => response.json())
      .then(json => {
        setProducts(json);
      })
      .catch(error => console.log(error));

  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/Categories')
      .then(response => response.json())
      .then(json => {
        setCategories(json);
      })
      .catch(error => console.log(error));

  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handlePageClick = ({selected: selectedPage}) =>{
  //   setCurrentPage(selectedPage);
  // }

  const handleChangeCategories = (individualCategory) => {
    //setActive(individualCategory.id);
    setCategory(individualCategory.CategoryName);
    filterFunction(individualCategory.CategoryName);
    handleClose();
  }

  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setFilterBy(event.target.value);
    handleShow();
  };

  const handleChangeFilterInputMin = (event) => {
    setMinPrice(event.target.value);
  }

  const handleChangeFilterInputMax = (event) => {
    setMaxPrice(event.target.value);
  }

  const searchHandler = (str) => {
    setsearchedProduct(products.filter(product => product["model"].toLowerCase().includes(str.toLowerCase())));
  }

  const sortProducts = (products, sortWith) => {
    switch (sortWith) {
      case 'default':
        return;
      case 'asc':
        return products.sort((a, b) => a.price - b.price);

      case 'desc':
        return products.sort((a, b) => b.price - a.price);
      case 'alph':
        return products.sort((a, b) => a.model > b.model ? 1 : -1,);
      case 'alph-reverce':
        return products.sort((a, b) => a.model > b.model ? -1 : 1,);
    }
  }

  const filterFunction = (text) => {
    const filter = products.filter(product => product.category === text);
    setFilteredProducts(filter);
  }

  const filterProducts = (filterWith) => {
    switch (filterWith) {
      case 'noFilter':
        return;
      case 'price':
        return (
          <>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter by Price</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="offcanvas-box">
                  <input type="number" placeholder="minimum price" onChange={handleChangeFilterInputMin} />
                  <input type="number" placeholder="maximum price" onChange={handleChangeFilterInputMax} />
                </div>

                <hr />
                <button type='submit' onClick={() => filterByPrice(minPrice, maxPrice)} className='btn-filter'>Filter</button>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );

      case 'cat':
        return (
          <>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter by Category</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {
                  categories.map((singleCategory, index) => (
                    <li key={index} onClick={() => handleChangeCategories(singleCategory)}>
                      {singleCategory.CategoryName}
                    </li>))
                }
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }
  }

  const filterByPrice = (min, max) => {
    const filter = products.filter(product => (Number(product.price) >= min && Number(product.price) <= max));
    setFilteredProducts(filter);
    handleClose();
  }

  const handleChangeCountOfElems = (event) => {
    setPerPage(event.target.value);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <SearchBar searchHandler={searchHandler} />
      <div className="search-filter-bar">
        <form action="">
          <div className="search-filter-bar-features">
            <div className="box">
              <span className="mr10">The number of products on the page</span>
              <select name="show" className="mr15" defaultValue="10" onChange={handleChangeCountOfElems}>
                <option value="10" selected="">10</option>
                <option value="5" selected="">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className='box'>
              <span className="mr10">Sort by </span>
              <select name="sortBy" onChange={handleChangeSort} defaultValue='default'>
                <option value="default" selected="">default</option>
                <option value="asc" selected="">ascending price</option>
                <option value="desc"> descending price </option>
                <option value="alph">alphabetically </option>
                <option value="alph-reverce">reverse alphabetically</option>
              </select>
            </div>
            <div className='box'>
              <span className="mr10">Filter by </span>
              <select name="filterBy" onChange={handleChangeFilter} defaultValue="noFilter">
                <option value="noFilter" selected="">noFilter</option>
                <option value="price" selected="">price</option>
                <option value="cat"> category </option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {filterProducts(filterBy)}
      {filteredProducts.length > 0 && filterBy !== 'noFilter' && (
        <ProductList product={sortBy !== 'default' ? sortProducts(filteredProducts, sortBy) : searchedProduct.length > 0 ? searchedProduct : filteredProducts} perPage={perPage} currentPage={currentPage} />
      )}
      {(filteredProducts.length < 1 || filterBy === 'noFilter') && (
        <>
          {products.length > 0 && (
            <ProductList product={searchedProduct.length > 0 ? searchedProduct : sortProducts(products, sortBy)} perPage={perPage} currentPage={currentPage} />
          )}
          {products.length < 1 && (
            <div>Please wait...</div>
          )}
        </>
      )}

      <Pagination perPage={perPage} totalProducts={products.length} paginate={paginate} />

    </>
  )
}

export default Product