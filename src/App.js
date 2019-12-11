import React, { Component } from "react";
import "./App.css";
import FormNew from "./components/FormNew";
import About from "./components/AboutUs";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SelectTemplate from "./components/SelectTemplate";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

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
        <Footer/>
        </div>
        </Router>
       
        
      
    );
  }
}

export default App;