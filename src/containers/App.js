import React, { Component } from 'react';
import classes from './App.module.css';
import Navbar from '../components/Header/Navbar';
import HeaderBG from '../components/Header/HeaderBG';
import HeaderTitle from '../components/Header/HeaderTitle';


//Local Assets
import alielLogo from '../assets/aliel-logo.png';
import headerBG from '../assets/header-bg.png';

/**
 * Task Planner:
 * Navbar
 * 1. Display Logo
 */


class App extends Component {

  state = {
    header: {
      title: "Aliel Reyes",
      subtitle: "Front End Engineer",
      btnText: "See Portfolio"
    }
  }

  render() {
      
    return (
      <div className="App">
        <HeaderBG 
        style={classes.headerBG}
        img={headerBG}/>
        <Navbar 
        style={classes.navbar}
        img={alielLogo}
        />

        <HeaderTitle 
        style={classes.headerTitle}
        title={this.state.header.title}
        subtitle={this.state.header.subtitle}
        btnText={this.state.header.btnText}
        />


      </div>
    );
  }
}

export default App;
