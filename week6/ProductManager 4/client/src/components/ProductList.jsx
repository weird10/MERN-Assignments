import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setProduct(res.data))
    } , [])

    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id !== productId))
        }
  return (
    <div>
        {
        product.map((product,index) => {
            return( 
            
            <div key={index}>   
                <p><Link to={`/product/${product._id}`}> {product.title}'s page
                </Link>
                </p>
                <div><Link to={`/product/edit/${product._id}`}>Edit {product.title} 
                </Link></div>
                <br />
                <DeleteButton productId={product._id} successCallback={()=> removeFromDom(product._id)} />
            </div>
            )})
    }  
    </div>
  )
}

export default ProductList