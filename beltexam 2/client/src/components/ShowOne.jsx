import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import pirateStyle from './showAll.module.css'

const ShowOne = (props) => {
    const [pirates, setPirates] = useState({})
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(response => {
                console.log(response.data);
                (setPirates(response.data));
            })
            .catch(err => console.log("error", err))
    }, [])
    const deletePirate=(deleteId)=>{
        console.log(deleteId.id);
        axios.delete("http://localhost:8000/api/pirates/delete/"+deleteId.id)
            .then(response=>{
                console.log(response.data);
                console.log("delete success");
                // setProducts(products.filter((product,i)=>product._id !==deleteId.id));
                navigate("/pirates");
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            {pirates ? (
                <div>
                    <nav>{pirates.name}</nav>
                    <h4><Link to={"/pirates"}>Pirate Crew</Link></h4>
                    <div class={pirateStyle.inlineBlock}>
                        <p><img src={pirates.image} alt="pirate image"/></p>
                        <p>{pirates.catchPhrase}</p>
                    </div>
                    <div class={pirateStyle.inlineBlock}>
                        <h1>About</h1>
                        <p>Position:{pirates.crewPosition}</p>
                        <p>Treasures:{pirates.treasureChests}</p>
                        <p>Peg Leg:{pirates.pegLeg? "Yes" :"No"}</p>
                        <p>Eye Patch:{pirates.eyePatch? "Yes" :"No"}</p>
                        <p>Hook Hand:{pirates.hookHand? "Yes" :"No"}</p>
                    </div>
                    <button onClick={()=>deletePirate({id})} style={{ color: "red" }}>
                        Delete
                    </button>
                    <button><Link to={`/edit/${id}`} style={{ color: "blue" }}>Edit</Link></button>
                </div>
            ) : "loading"}
        </div>
    );
}

export default ShowOne