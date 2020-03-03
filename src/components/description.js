import React from 'react'
import {connect} from 'react-redux'

function Description(props) {
    // const desc = movies.find(({id})=> id === match.params.id 
    // let desc = filtredMovies.match.params.movies.id

    // const Desc =(props)=>( props.match.params.id)
    
      // let Desc= this.props.match.params.id;
    
    return (
      <div>
       {props.movies.filter(el=> el.id== props.match.params.id).map((el , id)=>(
        <p className="text" key={id}>{el.desc}</p>
       ) ) }
       </div>
    )
}

const mapStateToProps = state => {
    return {
      movies: state.movies,
    };
  };
  

export default connect(mapStateToProps)(Description)
