import './App.css';
import {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [boxes,setBoxes]=useState([
    {
    color:"red",
    status:false
  },
  {
    color:"green",
    status:true},
    {
      color:"blue",
      status:true}
]);
  const addBox=(boxColorFromForm)=>{
    setBoxes([...boxes,boxColorFromForm])
  }
  const updateBox=(i)=>{
    // console.log("updated",i)
    const copy=[...boxes];
    // if(copy[i].status===true){
    //   copy[i].status=false;
    // }
    // else{
    //   copy[i].status=true;
    // }
    // console.log(copy);
    // setBoxes(copy);
    copy[i].status =!copy[i].status;
    setBoxes(copy);

  }
  const deleteBox=(i)=>{
    // console.log("delete",i);
    const filteredBoxes=boxes.filter((box,boxIndx)=>{
      // if(i===boxIndx){
      //   return false;
      // }
      // else{
      //   return true;
      // }
      return i!==boxIndx
    })
    setBoxes(filteredBoxes);
  }

  return (
    <div className="App">
      <h1>Boxes</h1>
      {/* {JSON.stringify(boxes)} */}
      <Form addBox={addBox}/>
      <Display boxes={boxes} updateBox={updateBox} deleteBox={deleteBox}/>
    </div>
  );
}

export default App;
