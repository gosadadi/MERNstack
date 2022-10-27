import React,{Component} from "react";
import List from "./List";
class PutItTogether extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <h1> {this.props.firstName} {this.props.lastName}</h1>
            <p><List {...this.props.age + this.state.count}/></p>
            <p>{this.props.hairColor}</p>
            <button onClick={this.props.handler}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
            
        )
    }
}
export default PutItTogether;