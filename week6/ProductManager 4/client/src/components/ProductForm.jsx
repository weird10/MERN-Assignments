import React, { useState } from 'react'
import axios from 'axios';


const ProductForm= (props) => {
    const {initialTitle, initialPrice, intitialDescription, onSubmitProp} = props
    const [ title, setTitle ] = useState(initialTitle)
    const [ price, setPrice ] = useState (initialPrice)
    const [ description, setDescription ] = useState (intitialDescription)

    const onSubmitHandler = (e) => {
        onSubmitProp({title, price, description});
    }

return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p><label>Title: 
                    <input type="text" name="title" onChange={ (e)=>setTitle(e.target.value)} value={title} />
                </label>
                </p>
                <p>
                <label>Price: $ 
                    <input type="number" name="price" onChange={ (e)=>setPrice(e.target.value)} value={price} />
                </label>
                </p>
                <p>
                <label>Description: 
                    <textarea onChange={ (e)=>setDescription(e.target.value)} name="description" value={description} />
                </label>
                </p>
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}
export default ProductForm;

