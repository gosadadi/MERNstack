import Survey from './components/Survey'
import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router"; 
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.
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

function App() {
  return (
    <div className="App">
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
      <Survey/>
    </div>
  );
}

export default App;
