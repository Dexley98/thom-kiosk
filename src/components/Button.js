import React, {Component} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Button extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        if(this.props.money === undefined){
            return(
                <Link to={this.props.destination}>
                    <button onClick={() => console.log('HI')}>{this.props.text}</button>
                </Link>
            )
        }
        return(
            <Link to={this.props.destination}>
                <button>
                    <p>{this.props.text}</p>
                    <p>{this.props.money}</p>
                </button>
            </Link>
        )
        
    }
}

export default Button