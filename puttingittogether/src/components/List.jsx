import React,{Component} from "react";
import PutItTogether from "./putittogether"
class List  extends Component{
    constructor(props){
        super(props);
        //========= state persist data=======
        this.state={
            age:this.props.age
        }
    }

    ageIncrement=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }

    render(){
        return(
            <div>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <p>{this.state.age}</p>
            <p>{this.props.hairColor}</p>
            <button onClick={()=>{this.setState({age:this.state.age + 1});}}>Birthday Button {this.props.firstName} {this.props.lastName}</button>
            </div>

        )
    }
}
export default List;