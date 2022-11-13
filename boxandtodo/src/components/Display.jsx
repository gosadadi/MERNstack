import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {props.boxes.map((box,indx)=>{
                return(
                    <div 
                    key={indx}
                    style={{backgroundColor:box.color,
                    height:"100px",
                    width:"100px",
                    display:"inline-block",
                    margin:"10px",
                    verticalAlign:"top",
                    textDecoration:box.status? "line-through" :"none"
                }}
                    >
                        {box.color}
                        <input type="checkbox" checked={box.status} onChange={()=>props.updateBox(indx)}/>
                        <button onClick={()=>{props.deleteBox(indx)}}>Delete</button>
                    </div>
                );
            })
        
        
        }</fieldset>
    )
}

export default Display