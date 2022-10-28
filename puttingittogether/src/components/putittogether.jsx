import React,{Component} from "react";
import List from "./List";
class PutItTogether extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<>
    <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </>}
}
export default PutItTogether;