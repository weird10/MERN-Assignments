import React, { useState } from 'react'
import axios from 'axios';
import 




const ProductForm= () => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState ("")
    const [ description, setDescription ] = useState ("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
    })
    .then(res => {
        console.log(res)
        console.log(res.data)
    }).catch(err=> console.log(err))
}

return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Title: 
                    <input type="text" onChange={ (e)=>setTitle(e.target.value)} />
                </label>
                <label>Price: $ 
                    <input type="number" onChange={ (e)=>setPrice(e.target.value)} />
                </label>
                <label>Description: 
                    <textarea onChange={ (e)=>setDescription(e.target.value)} />
                </label>
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}
export default ProductForm;

