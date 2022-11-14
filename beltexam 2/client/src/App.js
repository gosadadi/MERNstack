import { Routes, Route} from 'react-router-dom';
import './App.css';
import CreateForm from './components/CreateForm';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <ShowAll/>} path="/pirates"/>
        <Route element={<CreateForm/> } path="/pirate/new"/>
        <Route element={<Update />} path="/edit/:id" />
        <Route element={<ShowOne/>} path="/pirate/:id"/>
        {/* <Route path="*" element={<Navigate to={"/"} replace/>}/> */}
      </Routes>
    </div>
  );
}
export default App;
