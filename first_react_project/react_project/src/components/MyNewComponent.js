import React,{Component} from 'react';
class MyNewComponent extends Component{
    render(){
        return(<div>
            We are in MyNewComponent!
            {this.props.someText}
        </div>);
    }
}
export default MyNewComponent;