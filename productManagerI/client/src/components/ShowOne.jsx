import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowOne = (props) => {
    const [products, setProducts] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data);
                return (setProducts(response.data.product));
            })
            .catch(err => console.log("error", err))
    }, [])
    return (
        <div>
            <p>Title:{products.title}</p>
            <p>price:{products.price}</p>
            <p>description:{products.description}</p>
            </div>
    );
}

export default ShowOne