import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from  'react-router-dom' ;

function Cart() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Retrieve product details from the query parameters
    const productId = params.get('productId');
    const productName = params.get('productName');
    const productPrice = params.get('productPrice');
    const productImage = params.get('productImage');


    return (
        <div style = {{textAlign : "center",margin : "100px"}}>
            <h2 style = {{fontFamily : "fantasy" , fontSize : "20px", margin : '20px',textDecoration : "underline"}}>Shopping Cart</h2>
            <ul>
                <li style = {{fontFamily : "cursive" , fontSize : '20px', margin : "30px",}}>
                    <img src = {productImage}/>
                    <h4>ProductName : {productName}</h4>
                    <p>Total Price: ${productPrice}</p>
                    <Link  to = '/'><button style = {{margin : '50px', fontFamily  : "initial" , color : 'blue',}}>Continue Shopping....</button></Link>
                </li>
            </ul>
        </div>
    );
}

export default Cart;
