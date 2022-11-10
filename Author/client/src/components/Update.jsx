import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link,useNavigate} from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.author)
                setName(res.data.author.name);
            });
    }, []);

    const updateAuthor= e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
            name
        
        },setName(""))
            .then(res => {
                console.log(res)
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
                <h5>Edit this Author</h5>
                <Link to={'/'}>Home</Link>
                <form onSubmit={updateAuthor}>
                    {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                    <p>
                        <label>Name:</label><br />
                        <input type="text"
                            name="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <button onClick={cancelHandler}>Cancel</button>
                    <input type="submit" />
                </form>
            </div>
        )
    }

    export default Update;

