import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import { useEffect } from 'react'


const Main = () => {

  const [product, setProduct] = useState ([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
    .then(res => {
      setProduct(res.data)
    })
    .catch((err) => console.log(err))
  } , [])

  const removeFromDom = productId => {
    axios.delete('http://localhost:8000/api/product/' + productId)
    .then(res => {
      console.log(res)
      console.log(res.data)
      setProduct(product.filter(product => product._id !==productId))
    })
    .catch((err) => console.log(err))
  } 

  const createProduct = productParam => {
    axios.post('http://localhost:8000/api/products', productParam)
    .then(res => {
        console.log(res)
        console.log(res.data)
        setProduct([...product, res.data])
    })
    .catch(err=> console.log(err))
}

  
  
    return (
      <div>
        <ProductForm 
        onSubmitProp={createProduct} 
        initialTitle="" 
        initialPrice="" 
        initialDescription="" />
      
        <ProductList product={product}  removeFromDom={removeFromDom}/>
       
        </div>
    )
  }


export default Main