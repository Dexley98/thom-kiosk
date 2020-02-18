import React, { Component } from "react"

import Message from "./Message"
import Logo from "./Logo"
import Button from "./Button"
import Time from "./Time"
import Back from "./Back"

class PayToEnter extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className = "enter-wrapper">
                <Back destination="/"/>
                <Time />
                <Logo />
                <Message line1="Please Choose an Option" />
                <Button classy="left-button" destination="/inter-org" text="WU Faculty, Staff, and Students"/>
                <Button classy="right-button" destination="/visitors" text="Vistors"/>
            </div>
        )
    }
}

export default PayToEnter