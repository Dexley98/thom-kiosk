import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import back from "../photos/back-arrow.svg"

class Back extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className="back-arrow">
                <Link to={this.props.destination}>
                    <img className="back-arrow-image" src={back} alt="back button" style={{width: 100, height: 100}}/>
                </Link>
            </div>
        )
        
    }
}

export default Back