//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/notFound/NotFound';
import ProductList from './components/ProductList/ProductList'
import Detail from './pages/Detail/Detail'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout';


import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <>
        
            <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/products' element={<Product />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/category/:name' element={<ProductList />} />
                    <Route path='/detail/:id' element={<Detail />} />  
                    <Route path='/cart' element={<Cart />} /> 
                    <Route path='/checkout' element={<Checkout />} />  
                </Routes>
            <Footer />
          </Router>
      </>
  )
  };
  
  export default App;
