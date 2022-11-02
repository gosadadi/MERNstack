import {useState} from 'react';

const Tabs=(props)=>{
const [selected,setSelected]=useState(0)
const {tabs}=props;
const clickHandler=(idx)=>{
    setSelected(idx);
}
return(
    <div>
        <h1>Hello This is Tabs</h1>
        {tabs.map(
            (e,key)=><button onClick={(e)=>clickHandler(key)} key={key} value={e.label}>{e.label}</button>
        )}
            <h1>{tabs[selected].content}</h1>
    </div>
    );
}
export default Tabs;