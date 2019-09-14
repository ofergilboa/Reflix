import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Movie extends Component {
   render() {
      return (
         <div className="Movie">
            <Link to={`/Movie/${this.props.m.id}`}>
               <div className="img" backgroundColor={this.props.m.img}>
                  <div>+</div>
                  <div className="add">+</div>
                  {/* <div className="movieData">{this.props.m.year}</div> */}
                  {/* <div className="movieData">{this.props.m.title}</div> */}
               </div>
            </Link>
         </div>)
   }
}
export default Movie