import React, {Component} from "react"

class Group extends Component{
    constructor(){
        super()
        this.state = {value: 0}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    calculateTotal(){
        let multipler = this.state.value
        let total = 9.99 * multipler
        return total.toFixed(2)
    }

    render(){
        return(
            <div>
                <input type="number" value={this.state.value} onChange={this.handleChange} onClick={()=> console.log(this.state.value)}/>
                <h1>Price: $9.99</h1>
                <h1>Total: ${this.calculateTotal()}</h1>
            </div>
        )
    }
}

export default Group