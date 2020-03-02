import React, {Component} from "react"

class Message extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <header>
                <h1 className={this.props.h1Class}>{this.props.line1}</h1>
                { this.props.line2 !== undefined &&
                    <h2 className={this.props.h2Class}>{this.props.line2}</h2>
                }
                {this.props.email !== undefined &&
                    <h3 className="confirmation-email">{this.props.email}</h3>
                }
            </header>
        )
    }
}

export default Message