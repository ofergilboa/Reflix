import React, { Component } from 'react'
import Movie from './Movie';
import MovieDetails from './MovieDetails';


class Cataolg extends Component {

   render() {
      return (
         <div>
            {this.props.movies.map(m => <Movie m={m} />)}
         </div>
      )
   }
}

export default Cataolg