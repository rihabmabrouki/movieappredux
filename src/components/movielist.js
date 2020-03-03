
// import {FaStar} from 'react-icons/fa';
// import React from 'react' ;
// import { connect } from 'react-redux' ;
// import {searchrating} from '../actions/action'

//  function Rating(searchrating, ratingValue, rating) {

//     // searchrating = (i)=> {
//     //     this.setState({rating : i})
//     // }

//     return (
//         <div>
//             {[... Array(5)].map((star, i) => {
//                 const ratingvalue = i+1;
//                 return (
                    
//                 <label className="starss" key={i} >
//                   {this.props.searchrating ? 
//                     <input type="radio" 
//                            name="rating" 
//                            value={ratingvalue}
//                            onClick={()=>this.props.searchrating(ratingvalue)}
//                            onMouseOver={()=> {this.sethover(ratingvalue)}}
//                            onMouseOut={()=>{this.sethover(null)} }
//                             /> :
//                     <input type="radio" 
//                            name="rating" 
//                            value={ratingvalue} />

//             }
//                 <FaStar className="star" 
//                         color={ratingvalue <= (this.props.hover ||this.props.rating) ? "#ffc107" : "#e4e5e9"}
//                          />
//                 </label>
//                 );
//             })}
            
       
//         </div>
//     );
// }

// const mapStateToProps = state =>{
//     return {rating : state.rating,
//             hover : state.hover,
//             ratingValue:state.ratingValue}
// };

// const mapDispatchToProps =dispatch =>
// { return{
//     searchrating : rate => dispatch(searchrating(rate))}
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Rating);
  


//     searchinput= ()=>  this.state.list.filter((el)=> el.name.toLowerCase().includes(this.state.input.toLowerCase()) && (el.star >= this.state.rating) )

