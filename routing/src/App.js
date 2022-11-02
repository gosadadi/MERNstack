import './App.css';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router"; 
import HomeRouting from './components/HomeRouting'
import NumberIs4 from './components/NumberIs4';
import LukeAPIwalker from './components/LukeAPIwalker';
import React,{useState} from 'react';
import PlanetsRouting from './components/PlanetsRouting';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Home Component</h1>
      <Link to={"/about"}>Go to About </Link>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>About Component</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}
const Location = (props) => {
  const { city } = useParams();
  return (
    <h1>Welcome to { city }!</h1>
  );
}
const Hello=(props)=>{
  const { word} = useParams(); 

  return(
    <>
    <p style={{"color":"red"}}> The word is: {word}</p>
    </>
  );
}
const HelloBlueRed=(props)=>{
  const { word,color,thisOne} = useParams(); 

  return(
    <>
    <p style={{backgroundColor:`${thisOne}`, "color":`${color}`}}>The word is:{word} </p>
    </>

  );
}

const Search=props=>{

  const navigate = useNavigate();
  const [resource, setResource] = useState();
  const [selectedId, setSelectedId] = useState()
  const style={"backgroundColor":"blue","color":"white","height":"40px","width":"80px"}

  const handleSearch = (element) =>{
    element.preventDefault();
    navigate(`/${resource}/${selectedId}`);
}
  return(
    <div>
      <form onSubmit={handleSearch}>
                <label>Search for: </label>
                <select onChange={ e=>setResource(e.target.value)}>
                    <option value='people'>people</option>
                    <option value='planet'>planet</option>
                </select>
                <label>ID: </label>
                <input type='number' onChange={ e=>setSelectedId(e.target.value) } />
                <button style={style}> Search </button>
            </form>
    </div>

  );
}

function App() {

  return (
    <div className="App">
      <Search/>
      <Routes>
        <Route path="/home" element={<HomeRouting/>} />
        <Route path="/:num" element={<NumberIs4/>} />
        <Route path="/:word" element={<Hello/>} />
        <Route path="/:word/:color/:thisOne" element={<HelloBlueRed/>} />
        <Route path="/people/:id" element={<LukeAPIwalker/>}/>
        <Route path='/planet/:id' element={<PlanetsRouting/>}/>
      </Routes> 
      
    
    </div>
  );
}

export default App;
