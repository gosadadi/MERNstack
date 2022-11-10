import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";

const ShowOne = (props) => {
    const [authors, setAuthors] = useState({})
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log(response.data);
                return (setAuthors(response.data.author));
            })
            .catch(err => console.log("error", err))
    }, [])
    const deleteAuthor=(deleteId)=>{
        console.log(deleteId.id);
        axios.delete("http://localhost:8000/api/authors/delete/"+deleteId.id)
            .then(response=>{
                console.log(response.data);
                console.log("delete success");
                // setProducts(products.filter((product,i)=>product._id !==deleteId.id));
                navigate("/");
            })

            .catch(err=>console.log(err))
    }
    return (
        <div>
            {authors ? (
                <div>
                    <button onClick={()=>deleteAuthor({id})}>
                        Delete
                    </button>
                    <button><Link to={`/edit/${id}/`}>Edit</Link></button>
                    <p>Name:{authors.name}</p>
                    
                </div>
            ) : "loading"}

        </div>
    );
}

export default ShowOne