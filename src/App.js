import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Moviecard from "./components/moviecard"
import Description from './components/description'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {console.log("cvfhgvjrf")}

        <Route exact path="/" component={Movies}/>
        <Route exact path="/" component={Moviecard}/> 
        <Route exact path="/description/:id" render={props=><Description {...props}/>}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
