import React from 'react';
import './productstyles.css';
import products from './AllProducts';
import Nav from '../Navbar/Nav'
import  Testimonials from '../Home/Testimonials'
import { Link } from 'react-router-dom'; // Import Link


const AllProducts = () => {
  return (
    <>
     <Nav/>
        <h1 style = {{textAlign : "center" , fontFamily : "serif" , fontWeight : "bold", fontSize : "30px" , margin:"50px" ,}}>Shope Your Product</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
      {products.map((product) => (
        <div className='producths-card' key={product.id}>
           <Link to={`/product-details/${product.id}`}>
          <img src={product.imgUrl} alt={product.name} className='pro-img' />
          <div className='pro-details'>
            <h3 style = {{fontFamily : "monospace" , fontWeight : "bold", fontSize : "22px" ,}}>{product.name}</h3>
            <p   style ={{fontFamily : "cursive" , fontSize : "17px" ,}}>{product.description}</p>
            <p  style = {{fontWeight : "bold",}}>{product.value}</p>
          </div>  
          </Link> 
        </div>
      ))}
    </div>
    <Testimonials/>

    </>
  );
};

export default AllProducts;
