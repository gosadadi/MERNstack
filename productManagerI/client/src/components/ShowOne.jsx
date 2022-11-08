import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";

const ShowOne = (props) => {
    const [products, setProducts] = useState({})
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data);
                return (setProducts(response.data.product));
            })
            .catch(err => console.log("error", err))
    }, [])
    const deleteProduct=(deleteId)=>{
        console.log(deleteId.id);
        axios.delete("http://localhost:8000/api/products/delete/"+deleteId.id)
            .then(response=>{
                console.log(response.data);
                console.log("delete success");
                // setProducts(products.filter((product,i)=>product._id !==deleteId.id));
                navigate("/products");
            })

            .catch(err=>console.log(err))
    }
    return (
        <div>
            {products ? (
                <div>
                    <button onClick={()=>deleteProduct({id})}>
                        Delete
                    </button>
                    <button><Link to={`/products/${id}/edit`}>Edit</Link></button>
                    <p>Title:{products.title}</p>
                    <p>price:{products.price}</p>
                    <p>description:{products.description}</p>
                </div>
            ) : "loading"}

        </div>
    );
}

export default ShowOne