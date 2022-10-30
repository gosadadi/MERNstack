import React, {useState} from 'react';
const Input=props=>{
    const [color,setColor]=useState("");
    const{colors,setColors}=props;
    // const [colors,setColors]=useState(["blue","red","green","white"]);
    const handleChange=e=>{
        console.log(e.target.value);}
    const handleColor=()=>{
        const newColors=[...colors];
        newColors.push(color);
        setColors(newColors);
        console.log(newColors)
        setColor("");
    }
    return(
        <div>
            <p>Enter your favorite color!</p>
            <p>{color}</p>
            <p>{colors}</p>
            <input type="text"
            value={color}
                onChange={e=>setColor(e.target.value)}
            />
            <button onClick={handleColor}>Accept!</button>
        </div>
    )
};
export default Input;