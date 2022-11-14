import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';
import pirateStyle from './showAll.module.css'

const ShowAll = (props) => {
    const [pirates, setPirates] = useState([]);
    const[loaded,setLoaded]=useState(false);
    const {id} = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(response => {(setPirates(response.data));
                setLoaded(true)
            console.log(response.data);})
            .catch(err => console.log("error", err))
    }, [])
    const deletePirate=(id)=>{
        console.log(id);
        axios.delete("http://localhost:8000/api/pirates/delete/"+id)
            .then(response=>{
                console.log(response.data);
                setPirates(pirates.filter((pirate,i)=>pirate._id !==id));
            })
            .catch(err=>console.log(err))
    }
    return (
        <div className={pirateStyle.pirate}>
            <h1>Pirate Crew</h1>
            <Link to={"/pirate/new"}>Add a pirate</Link>
            <table>
                <tbody>
                    {loaded && pirates.map((pirate)=>{return(<tr key={pirate._id}>
                        <td className='pirateStyle.pirateAlign'>
                            <p>{pirate.name} </p>
                            <img src={pirate.image} alt="pirate image" width="400px" />
                        </td>
                        <td><Link to={`/pirate/${pirate._id}`}><button style={{width:"100px",backgroundColor:"blue",color:"white",height:"40px"}}>View Pirate</button></Link></td>
                        <td><button onClick={()=>deletePirate(pirate._id)} style={{width:"100px",backgroundColor:"red",color:"white",height:"40px"}}>Delete</button></td>
                        {/* <td>
                            <button onClick={()=>navigate(`/edit/${pirate._id}`)} style={{ color: "blue" }}>Edit</button>
                            <button  style={{ color: "red" }}>Delete</button>
                        </td> */}
                    </tr>);})}
                </tbody>
            </table>
        </div>
            
        );
}

export default ShowAll