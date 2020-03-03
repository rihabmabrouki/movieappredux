import React from "react";
import { connect } from "react-redux";
import { searchinput } from "../actions/action";
import Rating from "./rating";

const Movies = ({  searchinput }) => {
  return (
    <div>
      <div className="container">
        <input
          type="text"
          className="search"
          placeholder="Search for a Movie..."
          onChange={e => searchinput(e.target.value)}
        />
        <Rating/>
      </div>
     
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    searchinput: input => dispatch(searchinput(input))
  };
};



export default connect(null, mapDispatchToProps)(Movies);
