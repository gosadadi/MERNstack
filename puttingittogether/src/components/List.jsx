import React,{Component} from "react";

class List  extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    countHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(
            <>
            {this.state.count}
            handler={this.countHandler}
            </>

        )
    }
}
export default List;