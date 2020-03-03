import React from 'react'
import Modale from "./modal";
import Rating from "../components/rating";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {removemovie, editmovie} from '../actions/action'
// import ModaleEdit from '../components/madalEdit'


function Moviecard({movies, filtredMovies, removemovie ,editmovie}) {


    return (
        <div>
             <div className="movieslist">
        {(filtredMovies.length ? filtredMovies : movies).map((el, i) => (
          <div className="box" key={i}>
            <h3 className="title">{el.name}</h3>
            <div className="stars">
              <Rating  rating={el.star} />
            </div>
            <div className="affiche">
              <img className="Images" src={el.image} />
              {/* <div className="overlay">
                <div className="text">{el.desc}</div>
              </div> */}
            </div>
            <span className="info">{el.info}</span> 
            <br/>
            <Link className="desc" to={`/description/${el.id}`} activestyle={{color:"red"}}>Description</Link>
            <div>
            <span>
                  <i
                    className="far fa-trash-alt"
                    onClick={ () => removemovie(el.id)
                    }
                  ></i>
                </span>

                <span>
                

                {/* <i className="far fa-edit" onClick={()=> editmovie(el.id)}></i> */}
                <Modale isEdit={true} movie={el}/>
                </span>
            </div>
          </div>
        ))}
        <Modale isEdit={false} />
      </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removemovie: id => { dispatch(removemovie(id))},
          editmovie : payload =>{ dispatch(editmovie(payload))
    }
    
}
}
// const mapDispatchToProps={
//   removemovie
// }

const mapStateToProps = state => {
    return {
      movies: state.movies,
      filtredMovies: state.filtredMovies
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Moviecard)
