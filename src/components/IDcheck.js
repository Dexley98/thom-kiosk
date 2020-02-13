import React, {Component} from "react"

class IDcheck extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
           <div>
               W<input type="text" limit="8"></input>
           </div>
        )
    }
}

export default IDcheck