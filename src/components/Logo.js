import React, {Component} from "react"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import logo from "../photos/wu-logo.png"

class Logo extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <Link to="/"><img src={logo} className="logo-image" alt="Winthrops old logo" style={{width: 100, height: 100}}/></Link>
        )
    }
}

export default Logo