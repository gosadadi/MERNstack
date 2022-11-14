import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    //=======keep track of what is being typed via useState hook=====
    const [pirates, setPirates] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasureChests, setTreasureChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const allPirates=new Map(pirates)

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
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(response => {
                (setPirates(response.data));
                console.log(response.data);
            })
            .catch(err => console.log("error", err))
    }, [])
    //==========handler when the form is submitted========
    const onSubmitHandler = e => {
        //=========prevent default behavior of the submit==========
        e.preventDefault();
        //==========make a post request to create a new person=========
        axios.post('http://localhost:8000/api/pirates/new', {
            // ======req.body to replicate model========
            name,
            image,
            treasureChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand

        }, setName(""),
            setImage(""),
            setTreasureChests(0),
            setCatchPhrase(""),
            setCrewPosition(""),
            setPegLeg(true),
            setEyePatch(true),
            setHookHand(true)
        )
            .then(res => {
                navigate("/pirates")
                console.log(res.data)
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
        return navigate("/");
    }
    return (
        <div>
            <button><Link to={"/pirates"}>Crew Board</Link></button>
            <h5 style={{ color: "blue" }}>Add a new author</h5>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
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
                    <input type="number" min="1" onChange={(e) => setTreasureChests(e.target.value)} value={treasureChests} />
                </p>
                <p>
                    <label>Pirate Catch Phrase:</label><br />
                    <input onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
                </p>

                <p>
                    <label>Crew Position</label><br />
                    <select onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                        <option value="">Please select a value</option>
                        {allPirates.has("captain") ?
                            <option value="captain" disabled>Captain is already choosen</option> :
                            <option value="captain">captain</option>}
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    <input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} />
                    peg Leg
                </p>
                <p>
                    <label>Eye Patch:</label><br />
                    <input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} />
                </p>
                <p>
                    <label>Hook Hand:</label><br />
                    <input type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} />
                </p>
                <button onClick={cancelHandler}>Cancel</button>
                <input type="submit" />
            </form>
        </div>
    )
}
export default CreateForm;
