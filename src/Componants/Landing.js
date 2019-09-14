import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class
   landing extends Component {
   constructor() {
      super()
      this.state = {
         users: [
            { name: "one", backgroundColor: "#81ecec" },
            { name: "two", backgroundColor: "#55efc4" },
            { name: "three", backgroundColor: "#74b9ff" },
            { name: "four", backgroundColor: "#a29bfe" }
         ]
      }
   }
   render() {
      return (
         <div>
            {this.state.users.map(u => <Link className="App-link" to="/catalog"><span id = "user" style={{backgroundColor: u.backgroundColor}}> {u.name} </span></Link>)}
            {/* <a style="{{backgroundColor: {bgColors.Blue}}}" >blue</a> */}
            {/* style={{marginRight: spacing + 'em'}}  */}
         </div>)
   }
}
export default
   landing