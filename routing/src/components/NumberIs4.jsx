import React from 'react';
import {
    Link
} from "react-router-dom";
import { useParams } from "react-router"; 

const NumberIs4=(props)=>{
    const { num} = useParams(); 

    return(
        <>
        <Link to={"/home"}>Home </Link>
        <p>The number is :{num} </p>
        </>
    );
}
export default NumberIs4;