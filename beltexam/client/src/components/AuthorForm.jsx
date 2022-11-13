import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = () => {
    //=======keep track of what is being typed via useState hook=====
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    /*
    if you dont want use form element and want react to listen to onclick even
    pass in the following function to<button onClick = { formHandler }></button >
    const formHandler = () => {
        const newAuthor = {
            name: name
        }
        newAuthorAPI(newAuthor);
        setName("");
    }
    // const newAuthorAPI=(name)=>{
        axios.post("http://localhost:8000/api/authors/new", name)
        .then(res => {conso.log(res.data)
            addAuthorHandler(res.data.name)})
        .catch(err => {
            const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
        const addAuthorHandler=(name)=>{
        setName([...name,name]);
    }
}
*/
//==========handler when the form is submitted========
const onSubmitHandler = e => {

    //=========prevent default behavior of the submit==========

    e.preventDefault();

    //==========make a post request to create a new person=========

    axios.post('http://localhost:8000/api/authors/new', {
        // ======req.body to replicate model========
        name
    },setName(""))
        .then(res => {
            console.log(res.data)
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
const cancelHandler = () => {
    return navigate("/");
}
return (
    <div>
        <Link to={"/"}>Home</Link>
        <h5 style={{ color: "blue" }}>Add a new author</h5>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
            <p>
                <label>Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <button onClick={cancelHandler}>Cancel</button>
            <input type="submit" />
        </form>
    </div>
)
}
export default AuthorForm;
