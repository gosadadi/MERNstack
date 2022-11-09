import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import authorStyle from './showAll.module.css'

const ShowAll = (props) => {
    const [authors, setAuthors] = useState([]);
    const[loaded,setLoaded]=useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {(setAuthors(response.data));
                setLoaded(true)
            console.log(response.data);})
            .catch(err => console.log("error", err))
    }, [])
    return (
        <div className={authorStyle.author}>
            <Link to={"/new"}>Add an author</Link>
            <p>we have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loaded && authors.map((author)=>{return(<tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>);})}
                </tbody>
            </table>
        </div>
            
        );
}

export default ShowAll