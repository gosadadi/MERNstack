import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    //==========handler when the form is submitted========
    const onSubmitHandler = e => {

        //=========prevent default behavior of the submit==========

        e.preventDefault();

        //==========make a post request to create a new person=========

        axios.post('http://localhost:8000/api/products/new', {
            // ======req.body to replicate model========
            title,
            price,
            description

        })
            .then(res => {
                console.log(res.data)
                navigate("/products")
            })
            .catch(err => {
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price:</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description:</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;
