import React,{useState} from 'react'

const Form = (props) => {
    const[boxColor,SetBoxColor]=useState("");

    const submitColor=(e)=>{
        e.preventDefault();
        const boxToCreate={
            color:boxColor,
            status:false
        }
        props.addBox(boxToCreate);
    }
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            boxColor:{JSON.stringify(boxColor)}
            <form onSubmit={submitColor}>
                color:<input onChange={(e)=>SetBoxColor(e.target.value)} value={boxColor}/> 
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form