import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link,useNavigate} from "react-router-dom";

const Update = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasureChests, setTreasureChests] = useState(0);
    const [catchPhrase,setCatchPhrase]=useState("");
    const[crewPosition,setCrewPosition]=useState("");
    const [pegLeg,setPegLeg]=useState(true);
    const [eyePatch,setEyePatch]=useState(true);
    const [hookHand,setHookHand]=useState(true);
    const navigate=useNavigate();
    const {id}=useParams();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                setImage(res.data.image);
                setTreasureChests(res.data.treasureChests);
                setCatchPhrase(res.data.catchPhrase)
                setCrewPosition(res.data.crewPosition);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            });
    }, []);

    const updatePirate= e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pirates/update/${id}`, {
            name,
            image,
            treasureChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        },setName(""),
        setImage(""), 
        setTreasureChests(0),
        setCatchPhrase(""),
        setCrewPosition(""),  
        setPegLeg(true),setEyePatch(true), 
        setHookHand(true))
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
        }
        const cancelHandler = () => {
            return navigate("/pirates");
        }
        return (
            <div>
                <h5>Edit this Pirate</h5>
                <Link to={'/pirates'}>Pirate Crew</Link>
                <form onSubmit={updatePirate}>
                    {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                    <p>
                <label>Pirate Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <p>
                <label>Image url:</label><br />
                <input onChange={(e) => setImage(e.target.value)} value={image} />
            </p>
            <p>
                <label># of Treasure Chests:</label><br />
                <input type="number" min="1" onChange={(e) => setTreasureChests(e.target.value)}value={treasureChests} />
            </p>
            <p>
                <label>Pirate Catch Phrase:</label><br />
                <input onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
            </p>
            <p>
                <label>Crew Position</label><br />
                <select onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                    <option value="">Please select a value</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </p>
            <p>
                <input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)}checked={pegLeg} />
                peg Leg
            </p>
            <p>
                <label>Eye Patch:</label><br />
                <input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)}checked={eyePatch} />
            </p>
            <p>
                <label>Hook Hand:</label><br />
                <input type="checkbox" onChange={(e) => setHookHand(e.target.checked)}checked={hookHand} />
                    </p>
                    <button onClick={cancelHandler}>Cancel</button>
                    <input type="submit" />
                </form>
            </div>
        )
    }

    export default Update;

