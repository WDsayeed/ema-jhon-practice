import React from 'react';
import './Product.css'

const Product = (props) => {
        // console.log(props)
        const {img,seller,name,price,ratings} =props.product
        const handleAddToCart= props.handleAddToCart
        return (
                <div className='product'>
                     <img src={img} alt="" />
                     <div>
                     <h4>{name}</h4>  
                     <p>Price: {price}</p> 
                     <p>Manufacturer: {seller}</p>
                     <p>Rating: {ratings}s</p>
                     </div>
                     <button onClick={handleAddToCart} className='btn-cart'>Add to Cart</button>
                </div>
        );
};

export default Product;