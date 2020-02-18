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
                <div className={this.props.classy}>
                    <Link to={this.props.destination}>
                        <button onClick={() => console.log('HI')}>{this.props.text}</button>
                    </Link>
                </div>
            )
        }
        return(
            <div className={this.props.classy}>
                <Link to={this.props.destination}>
                    <button>
                        <p>{this.props.text}</p>
                        <p>{this.props.money}</p>
                    </button>
                </Link>
            </div>
        )
        
    }
}

export default Button