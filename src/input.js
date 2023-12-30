import {Component} from "react";
class Input extends Component {
    constructor(props){super(props)}
    state = {  } 
    render() { 
        return (<h2> input
            <input type="text" onChange={this.props.onChange} />
        </h2>);
    }
}
 
export default Input;