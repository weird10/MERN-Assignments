
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
import {useNavigate} from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then ( res => {
          setProduct(res.data);
          setLoaded(true)
        })
        .catch((err) => console.log(err))
    }, [])

    const updateProduct = productParam => {
      axios.put("http://localhost:8000/api/product/" + id, productParam)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
    }

  return (
    <div>
      <h1>Update Item: {product.title}</h1>
      { 
      loaded && <ProductForm onSubmitProp={updateProduct} 
      initialTitle={product.title} 
      initialPrice={product.price} 
      initialDescription={product.description} />
      }
  </div>
  )
}

export default Update