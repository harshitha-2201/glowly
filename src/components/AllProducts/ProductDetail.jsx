
import React, { useState } from 'react';
import images from './ProductDetails.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StarBorderPurple500TwoToneIcon from '@mui/icons-material/StarBorderPurple500TwoTone';
import './productstyles.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = images.find((item) => item.id === parseInt(productId));
    const [selectedImage, setSelectedImage] = useState(images[0].id);

    const handleImageClick = (imageId) => {
        setSelectedImage(imageId);
    };
    const handleAddToCart = () => {
        // Check if a product is selected
        if (product) {
            // Use the navigate function to navigate to the cart page with query parameters
            navigate(`/cart?productId=${product.id}&productName=${product.title}&productPrice=${product.price}`);
            alert('Product added to the Cart Sucesfully')

        } else {
            // Handle the case when the product is not found
            alert("Product not found. Unable to add to the cart.");
        }
    };


    return (
        <div classname = 'pro-details-container'>
            <h1 className="tag">Product Details</h1>
            <div className="product-details">
                <div className="image-list">
                    {product.imageSlider.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => handleImageClick(image.id)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
                {product && (
                    <div className="details">
                        {selectedImage !== null && (
                            <div className="selected-image">
                                <img
                                    src={product.imageSlider.find((image) => image.id === selectedImage).src}
                                    alt={product.imageSlider.find((image) => image.id === selectedImage).alt}
                                />
                            </div>
                        )}
                        <div className="product-info">
                            <h1 style ={{fontSize : '30px',}}>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>
                                {product.rating} <StarBorderPurple500TwoToneIcon />
                            </p>
                            <button onClick={handleAddToCart}
                            className='bag-btn'>ADD TO BAG</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
