// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useParams, useNavigate } from "react-router-dom";

// const Update = (props) => {
//     const { id } = useParams();
//     const [name, setName] = useState('');
//  
//     const [errors, setErrors] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products/${id}`)
//             .then(res => {
//                 console.log(res.data.product)
//                 setTitle(res.data.product.title);
//                 setPrice(res.data.product.price);
//                 setDescription(res.data.product.description);

//             });
//     }, []);

//     const updateProduct = e => {
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/products/update/${id}`, {
//             title,
//             price,
//             description
//         })
//             .then(res => {
//                 console.log(res)
//                 navigate("/products")
//             })
//             .catch(err => {
//                 const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
//                 const errorArr = []; // Define a temp error array to push the messages in
//                 for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 // Set Errors
//                 setErrors(errorArr);
//             })
//         }
//         return (
//             <div>
//                 <h1>Update a Product</h1>
//                 <form onSubmit={updateProduct}>
//                     {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
//                     <p>
//                         <label>Title</label><br />
//                         <input type="text"
//                             name="title"
//                             value={title}
//                             onChange={(e) => { setTitle(e.target.value) }} />
//                     </p>
//                     <p>
//                         <label>Price</label><br />
//                         <input type="number"
//                             name="price"
//                             value={price}
//                             onChange={(e) => { setPrice(e.target.value) }} />
//                     </p>
//                     <p>
//                         <label>Description</label><br />
//                         <input type="text"
//                             name="description"
//                             value={description}
//                             onChange={(e) => { setDescription(e.target.value) }} />
//                     </p>
//                     <input type="submit" />
//                 </form>
//             </div>
//         )
//     }

//     export default Update;

