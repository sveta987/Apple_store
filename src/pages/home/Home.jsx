import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./home.css"

import Categories from '../../components/categories/Categories';
import Newsletter from '../../components/Newslatter/Newsletter';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [CarouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [showBanner, setShowBanner] = useState(true);
  const [categoryName, setcategoryName] = useState([]);
  //window.localStorage.setItem("WELCOME", JSON.stringify(showBanner));
  
  const getCategoryName = (e) => {
    setcategoryName(e.currentTarget.id);
  }

  useEffect(() => {
    fetchData('http://localhost:3000/CarouselItems', setCarouselItems);
    fetchData('http://localhost:3000/Categories', setCategories);
    setShowBanner(JSON.parse(window.localStorage.getItem("WELCOME")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("WELCOME", JSON.stringify(showBanner))
  }, [showBanner])
  const fetchData = (link, setItemFunction) => {
    fetch(link)
      .then(response => response.json())
      .then(json => {
        setItemFunction(json);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {showBanner &&
        <div className='banner'>
          <div className="content">
            <h2>Welcome to APPLE STORE </h2>
            <p>Here you can find your dream gadget and join the world changers</p>
          </div>
          <button onClick={()=> setShowBanner(false)}>Hide</button>
        </div>}

      <div className='carousel-content'>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
          {
            CarouselItems.map(item =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt='IPhone'
                />

                <Carousel.Caption className='carousel-text'>
                  <h3>APPLE STORE</h3>
                  <p>Apple Store is an equal opportunity employer that is committed to inclusion and diversity. We take affirmative action to ensure equal opportunity for all applicants</p>
                </Carousel.Caption>
              </Carousel.Item>
            )

          }
        </Carousel>
        <Categories categories={categories} categoryName={categoryName} getCategoryName={getCategoryName} />
        <Newsletter />

      </div>
    </>
  )
}
export default Home
