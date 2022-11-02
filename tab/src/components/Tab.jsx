import {useState} from 'react';
import Tabs from './Tabs';

const Tab=(props)=>{
const {tabs,setTabs}=props;
const [label,setLabel]=useState("");
const [content,setContent]=useState("");
const [errors,setErrors]=useState('');
const formHandler=()=>{
    if(label.length<1 || content.length<1){
        setErrors("You made error");
        return;

    }else{
        setErrors("");
    }
    const newTab={label:label,content:content};
    console.log(newTab);
    setTabs([...tabs,newTab]);
    setLabel('');
    setContent('');
}
return(
    <div>
        <h1>Hello this is Tab</h1>
        <p>Label</p>
        <p style={{"color":"red"}}>{errors}</p>
        <p>The label is:{label} and the content is {content}</p>
        <input 
            value={label} 
            type="text" 
            onChange={e=>setLabel(e.target.value)}
        />
        <p>content</p>
        <input 
            value={content} 
            type="text" 
            onChange={e=>setContent(e.target.value)}
        />
        <button onClick={formHandler}>Submit</button>
    </div>
    );
}
export default Tab;