import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import exit from "../photos/exit.svg"

class Exit extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className="exit-button">
                <Link to={this.props.destination}>
                    <img src={exit} alt="exit button" style={{width: 60, height: 60}}/>
                </Link>
            </div>
        )
        
    }
}

export default Exit