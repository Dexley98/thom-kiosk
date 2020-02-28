import React, {Component} from "react"
import { formatDiagnosticsWithColorAndContext } from "typescript"

const styleRules = {
    color: "#FFB20F",
    fontSize:"2em",
    textAlign: "right",
    position: "absolute",
    width: "250px",
    left: "82%"
};

class Time extends Component{
    constructor(){
        super()
        this.state = {}
    }

    date(){
        let today = new Date()
        let month = today.getMonth() + 1
        let day = today.getDate() 
        let year = today.getFullYear()

        return month + "." + day + "." + year
    }

    determineMeal(hours, minutes){
        let message

        if(hours < 7){
            message = "Closed"
        }
        else if(hours == 7){
            if(minutes >= 30){
                message = "Breakfast"
            }
            else{
                message = "Closed"
            }
        }
        else if(hours > 7 && hours < 10){
            message = "Breakfast"
        }
        else if(hours == 10){
            message = "continental"
        }
        else if(hours >= 11 && hours < 14){
            message = "Lunch"
        }
        else if(hours >= 14 && hours < 17){
            message = "Light Lunch"
        }
        else if(hours >= 17 && hours < 21){
            message = "Dinner"
        }
        else if(hours >=21 && hours < 24){
            message = "Closed"
        }
        else{
            message = "Im really confused homie."
        }
        
       return message
    }

    currentTime(){
        let today = new Date()
        let hours = today.getHours()
        let minutes = today.getMinutes()

        let meal = this.determineMeal(hours, minutes)
        
        let timeString = hours + ":" + minutes

        return {meal, timeString}
    }

    render(){
        return(
           <div style={styleRules} className="time-box">
               <p>{this.date()}</p>
               <p>{this.currentTime().timeString}</p>
               <p>{this.currentTime().meal}</p>
           </div>
        )
    }
}

export default Time