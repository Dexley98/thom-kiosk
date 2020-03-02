import React, {Component} from "react"

class Turnstile extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        function random(minVal, maxVal){
            let randVal = minVal + (Math.random()*(maxVal-minVal));
            return Math.round(randVal)
        }
        return(
            <div>
                <h1 className="turnstile-h1">Enter this number at the turnstile</h1>
                <h4 className="turnstile-number">{random(101,999)}</h4>
            </div>
        )
    }
}

export default Turnstile