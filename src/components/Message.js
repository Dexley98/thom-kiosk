import React, {Component} from "react"

class Message extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <header>
                <h1>{this.props.line1}</h1>
                { this.props.line2 !== undefined &&
                    <h2>{this.props.line2}</h2>
                }
            </header>
        )
    }
}

export default Message