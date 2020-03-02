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
                    <input className="form-email" type="email" placeholder="Email (for your receipt)"/>
                }
                <input className="form-cardholder" type="text" placeholder="Cardholder Name" />
                <input className="form-card-number" type="text" placeholder="Card Number" />
                <input className="form-cvv" type="number" placeholder="CVV" limit="3" />
                <input className="form-exp" type="text" placeholder="Exp" limit="5" />
            </div>
        )
    }
}

export default Form