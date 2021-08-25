import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import './App.css';
import ScrollUpButton from 'react-scroll-up-button'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Home from './Components/Home'

class App extends Component {

render() {
  return (
         <Router>
          <div className="App">
             <ScrollUpButton/>
             <Nav/>
            <Switch>
               <Route path="/" exact component={Home}>
                <div id="home-container">
                 <Home/>
                </div>
               </Route>
               {/* <Route path="/About">
                <div id="about-container">
                  <About/>
                </div>
               </Route> */}
               <Route path="/Portfolio">
                <div id="portfolio-container">
                  <Portfolio/>
                </div>
               </Route>
               <Route path="/Contact">
                <div id="contact-container">
                  <Contact/>
                </div>
               </Route>
            </Switch>
            <div id="footer-container">
               <Footer/>
            </div>
          </div>
         </Router>
      );
   }
}
export default App
