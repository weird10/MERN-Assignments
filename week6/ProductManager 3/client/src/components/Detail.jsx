import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const Detail = (props) => {
    const [thisProduct, setThisProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    
    useEffect (() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then((res) => {
            console.log("this is", res.data);
            setThisProduct(res.data);
        }).catch(err=> console.log(err))
    } , [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/products");
            })
            .catch((err) => {
                console.log(err);
            });
    };

  return (
    <div>
        <h2>{thisProduct.title}</h2>
        <p>Price: ${thisProduct.price}</p>
        <p>Description: {thisProduct.description}</p>
        <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Detail