import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import Detail from '../components/Detail'


const Main = (props) => {

  const [product, setProduct] = useState ([])

  const removeFromDom = productId => {
    setProduct(product.filter(product => product._id != productId))
  }
    return (
      <div>
        <ProductForm product={product} setProduct={setProduct} />
        <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        <Detail product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
  }


export default Main