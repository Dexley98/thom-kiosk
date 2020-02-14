import React, {Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                {this.props.needEmail &&
                    <input type="email" placeholder="Email (We use this to send your receipt)"/>
                }
                <input type="text" placeholder="Cardholder Name" />
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="CVV" limit="3" />
                <input type="text" placeholder="Exp" limit="5" />
            </div>
        )
    }
}

export default Form