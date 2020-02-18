import React, {Component} from "react"

class IDcheck extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
           <div className="id-check">
               <span className="id-w">W</span><input type="text" limit="8" defaultValue="30289793"></input>
           </div>
        )
    }
}

export default IDcheck