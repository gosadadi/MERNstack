import { Routes, Route  } from 'react-router-dom';
import './App.css';
import AuthorForm from './components/AuthorForm';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite Author</h1>
      <Routes>
        <Route element={ <ShowAll/>} path="/"/>
        <Route element={<AuthorForm/> } path="/new"/>
        <Route element={<Update />} path="/edit/:id" />
        <Route element={<ShowOne/>} path="/authors/:id"/>
        {/* <Route path="*" element={<Navigate to={"/"} replace/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
