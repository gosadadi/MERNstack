import React, { useState } from 'react';
import Input from './components/Input'
// import MessageForm from './components/MessageForm';
// import MessageDisplay from './components/MessageDisplay';


function App() {
  const [colors, setColors] = useState(["blue","red"]);
  // const [currentMsg, setCurrentMsg] = useState("There are no messages");
  //   const youveGotMail = ( newMessage ) => {
  //     setCurrentMsg( newMessage );
  // }
  const style={
    "height":"50px",
    "width":"50px",
    "margin":"10px",
    "color":"white"
  }
  return (
    <div className="App">
      <ul>
        {colors.map((oneColor, indx) => 
        <p style={{...style,backgroundColor:oneColor}} key={indx}>
          {oneColor}
          {/* <Box key={indx} color={color}  */}
        </p>)}
      </ul>
      <Input colors={colors} setColors={setColors} />
    </div>
  );
}

export default App;


