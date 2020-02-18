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
            <div className="group">
                <input className="number-input" type="number" value={this.state.value} onChange={this.handleChange} onClick={()=> console.log(this.state.value)}/>
                <div className="group-totals">
                    <h2>Price: <span className="group-money">$9.99</span></h2>
                    <h2>Total: <span className="group-money">${this.calculateTotal()}</span></h2>
                </div>
            </div>
        )
    }
}

export default Group