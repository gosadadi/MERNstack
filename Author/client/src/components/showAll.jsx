import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';
import authorStyle from './showAll.module.css'

const ShowAll = (props) => {
    const [authors, setAuthors] = useState([]);
    const[loaded,setLoaded]=useState(false);
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {(setAuthors(response.data));
                setLoaded(true)
            console.log(response.data);})
            .catch(err => console.log("error", err))
    }, [])
    const deleteAuthor=(id)=>{
        console.log(id);
        axios.delete("http://localhost:8000/api/authors/delete/"+id)
            .then(response=>{
                console.log(response.data);
                setAuthors(authors.filter((author,i)=>author._id !==id));
            })
            .catch(err=>console.log(err))
    }
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
                        <td><Link to={`/authors/${author._id}`}>{author.name}</Link></td>
                        <td>
                            <button onClick={()=>navigate(`/edit/${author._id}`)}>Edit</button>
                            <button onClick={()=>deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>);})}
                </tbody>
            </table>
        </div>
            
        );
}

export default ShowAll