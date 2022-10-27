import PersonalCard from './components/PersonalCard';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>< PersonalCard firstName={"Doe,"} lastName={"Jane"}/> </h1>
        <p>< PersonalCard age={"Age:45"}/></p>
        <p>< PersonalCard hairColor={"Hair Color:Black"}/></p>
      </div>
      <div>
        <h1>< PersonalCard firstName={"Smith,"} lastName={"John"}/> </h1>
        <p>< PersonalCard age={"Age:88"}/></p>
        <p>< PersonalCard hairColor={"Hair Color:Brown"}/></p>
      </div>
      <div>
        <h1>< PersonalCard firstName={"Fillmore,"} lastName={"Millard"}/> </h1>
        <p>< PersonalCard age={"Age:50"}/></p>
        <p>< PersonalCard hairColor={"Hair Color:Brown"}/></p>
      </div>
      <div>
        <h1>< PersonalCard firstName={"Smith,"} lastName={"Maria"}/> </h1>
        <p>< PersonalCard age={"Age:62"}/></p>
        <p>< PersonalCard hairColor={"Hair Color:Brown"}/></p>
      </div>
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      
    </div>
  );
}

export default App;
