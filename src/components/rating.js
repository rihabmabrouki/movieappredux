
import {FaStar} from 'react-icons/fa';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import{searchrating} from '../actions/action'

class Rating extends Component {

    state ={
    rating :this.props.rating,
      hover:null
    }

    searchrating = (i)=> {
        this.setState({rating : i})
    }

    sethover = ()=> {
        this.setState({hover :this.state.hover})
     }

    render() {
        return (
            <div>
                {
                   [... Array(5)].map((star, i) => {
                     const ratingvalue = i+1;

                      return(
                        <label className="starss" key={i} >
                        {this.props.searchrating ? 
                          <input type="radio" 
                                 name="rating" 
                                //  value={ratingvalue}
                                 onClick={()=>this.props.searchrating(ratingvalue)}
                                 onMouseOver={()=> {this.sethover(ratingvalue)}}
                                 onMouseOut={()=>{this.sethover(null)} } 
                                  /> :
                          <input type="radio" 
                                 name="rating" 
                                 value={ratingvalue} />
                        }
                         <FaStar className="star" 
                        color={ratingvalue <= (this.state.hover || this.state.rating) ? "#ffc107" : "#e4e5e9"}
                         />
                        </label>
                      )

                     })

                }
                
            </div>
        )
    }
}

const mapDispatchToProps =dispatch =>
{ return{
    searchrating : rate => dispatch(searchrating(rate))}
};
export default connect(null, mapDispatchToProps)(Rating);


  

   
          
              
