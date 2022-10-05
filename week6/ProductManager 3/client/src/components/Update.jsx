
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then ( res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err) => console.log(err))
    }, [])

    const updateProduct = (e) => {
      e.preventDefault();
      axios.put("http://localhost:8000/api/product/" +id, {
        title,
        price,
        description
      })
      .then(res => {
        console.log(res);
        navigate("/products");
      })
      .catch(err => console.log(err))
    }

  return (
    <div>
      <h1>Update Item: {title}</h1>
      <form onSubmit={updateProduct}>
        <label>Price:
            <input type="number"
            name="price"
            value={price}
            onChange={(e) => { setPrice(e.target.value)}} />
        </label>
        <label>Description:
            <input type="text"
            name="description"
            value={description}
            onChange={(e) => { setDescription(e.target.value)}} />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Update