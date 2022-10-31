import React,{useState} from 'react';
import './App.css';
import Todo from './components/Todo';
function App() {
  /* 
  below array destructure:
  const newToDoStateArr=useState("");
  const newToDo=newToDoStateArr[0];
  const setNewToDo=newToDoState[1]
  */
  const [newToDo,setNewToDo]=useState("");
  const [todos,setTodos]=useState([]);

  const handleNewToDoSubmit=(event)=>{
    event.preventDefault();
    if (newToDo.length===0){
      return;
    }
    const todoItem={
      text:newToDo,
      complete:false
    };
    setTodos([...todos,todoItem]);
    setNewToDo("");
  };
  const handleToDoDelete=(delIdx)=>{
    const filteredTodos=todos.filter((_todo,i)=>{
      return i !== delIdx;
    });
    setTodos(filteredTodos);

  };
  const handleToggleTodoComplete=(idx)=>{
    const updatedTodos=todos.map((todo,i)=>{
      if(idx===i){
        todo.complete = !todo.complete;
        /* const updatedTod={...todo,complete: !todo.complete};
        return updatedTodo;
        */
      }
      return todo;
    });
    setTodos(updatedTodos);

  }
  return (
    <div style={{textAlign:"center"}}>
      <form onSubmit={(event)=>{
        handleNewToDoSubmit(event);}}>
        <input type="text" 
        value={newToDo}
        onChange={(e)=>{setNewToDo(e.target.value)}}/>
        <div>
          <button>Add</button>
        </div>
        </form>
        <hr/>
        {
          todos.map((todo,i)=>{
            const todoClasses=["bold","italic"];
            if (todo.complete){
              todoClasses.push("strike-through")
            }
            return <div key={i}>
              <input type="checkbox" 
              checked={todo.complete}
              onChange={(event)=>{
                handleToggleTodoComplete(i);
              }}/>
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <button onClick={(event)=>{
                handleToDoDelete(i);}}
              styele={{margin:"20px"}}
              >Delete</button>
            </div>
          })
        }
    </div>
  );
}

export default App;
