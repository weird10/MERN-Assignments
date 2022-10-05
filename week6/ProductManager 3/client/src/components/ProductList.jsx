import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const {removeFromDom, product, setProduct} = props;
    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch((err) => console.log(err))
    }
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err) => console.log(err))
    },[])


  return (
    <div>
        {
        product.map((product,index) => {
            return( 
            <div key={index}>   
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: ${product.description}</p>
                <Link to={`/product/${product._id}`}> {product.title}'s page
                </Link>
                <Link to={`/product/edit/${product._id}`}>Edit {product.title} 
                </Link>
                <button onClick= {(e) => {deleteProduct(product._id)}}>
                    Delete this item
                </button>
            </div>
            )})
    }  
    </div>
  )
}

export default ProductList