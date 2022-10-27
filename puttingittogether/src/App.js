import './App.css';
import List from './components/List';
import PutItTogether from './components/putittogether';
var peopleInfo =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"}]
  

function App() {
  return (
  <>
  {peopleInfo.map(person => {
        return( <div>
          <PutItTogether firstName={person.firstName} lastName={person.lastName}  age={person.age}  hairColor={person.hairColor}></PutItTogether>
        </div>
        )
      })
      
      }
  
  </>
  );
}

export default App;
