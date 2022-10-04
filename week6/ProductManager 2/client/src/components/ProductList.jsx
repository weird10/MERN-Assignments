import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const {product, setProduct} = props;

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
                <Link to={`/products/${product._id}`}> {product.title}'s page
                </Link>
            </div>
            )})
    }  
    </div>
  )
}

export default ProductList