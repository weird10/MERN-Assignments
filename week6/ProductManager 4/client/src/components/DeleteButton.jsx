import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const DeleteButton = (props) => {
    const { productId, successCallback } = props
    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
        .then (res => {
            successCallback();
        })
    }
    return (
        <button onClick = {deleteProduct}>Byeeee</button>
    )
}

export default DeleteButton