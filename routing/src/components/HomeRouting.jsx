import React from "react";
import {
    Link
} from "react-router-dom";

const Home = (props) => {
    return (
        <>
        <Link to={"/4"}>Go to 4</Link> 
        <h1 style={{ color: "blue" }}>Welcome</h1>
        </>
    );
}
export default Home;

