import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListMovieComponent from "./components/ListMovieComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-md-6">
          <h1 className="text-center" >Search Movies</h1>
          <Switch>
            <Route path="/" component={ListMovieComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
