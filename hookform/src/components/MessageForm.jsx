import React,{useState} from "react";
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const [count,setCount]=useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };

    const countHandler=(e)=>{
        setCount(count  + 1);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea>
            <p>Message Sent so far is {count}</p>
            <input type="submit" value="Send Message" onClick={countHandler}/>
        </form>
    );
};

export default MessageForm;
