import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormNew from "./components/FormNew";
import About from "./components/AboutUs";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SelectTemplate from "./components/SelectTemplate";
import HomePage from "./components/HomePage";

class App extends Component {
 

  render() {
    return (
     
        <Router>
         <div className="App">
           <MainPage/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/selectTemplate" component={SelectTemplate}/>
            <Route path="/about"  component={About}/>
            <Route path="/form"  component={FormNew}/>
          </Switch>
        
        </div>
        </Router>
       
        
      
    );
  }
}

export default App;