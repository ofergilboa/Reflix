import React, { Component } from 'react'

class MovieDetails extends Component {
   render() {
      let id = this.props.match.params.id
      console.log(id)
      let movie = this.props.movies.find(m => m.id == id)

      return (
         <div>
            <span className= "aMovie">
               <img className="imgS" src={movie.img} />
               <p className="descr">{movie.descrShort}</p>
            </span>
         </div>)
   }
}
export default MovieDetails