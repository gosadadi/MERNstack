import { Routes, Route  } from 'react-router-dom';
import './App.css';
import AuthorForm from './components/AuthorForm';
import ShowAll from './components/showAll';

function App() {
  return (
    <div className="App">
      <h1>Favorite Author</h1>
      <Routes>
        {/* <Route element={<ShowOne />} path="/authors/:id" /> */}
        <Route element={<AuthorForm/> } path="/new"/>
        <Route element={ <ShowAll/>} path="/"/>
        {/* <Route element={<Update/>} path="/authors/:id/edit"/> */}
        {/* <Route path="*" element={<Navigate to={"/"} replace/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
