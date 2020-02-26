import React, {Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className="form">
                {this.props.needEmail &&
                    <input type="email" placeholder="Email (for your receipt)"/>
                }
                <input type="text" placeholder="Cardholder Name" /><br/>
                <input type="text" placeholder="Card Number" /><br/>
                <input type="number" placeholder="CVV" limit="3" /><br />
                <input type="text" placeholder="Exp" limit="5" /><br />
            </div>
        )
    }
}

export default Form