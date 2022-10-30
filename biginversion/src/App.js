import Counter from './components/counter';
import HookCounter from './components/hookCounter';
import UserForm from './components/UserForm';
import FormUser from './components/FormUser';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" /> 
      <PersonCard firstName="Millard" lastName="Fillmore" age={ 50} hairColor="Brown" /> 
      <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" /> 

    </div>
  );
}

export default App;
