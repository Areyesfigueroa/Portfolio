import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
import Navbar from '../components/Header/Navbar';
import PageTitle from '../components/Header/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';

//Local Assets
import alielLogo from '../assets/aliel-logo.png';

/**
 * Task Planner:
 * About Section
 * 1. About Title
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
        <header>
          {/** Header Components */}
          <Navbar 
          style={classes.navbar}
          img={alielLogo}
          />
          <PageTitle 
          style={classes.pageTitle}
          title={this.state.header.title}
          subtitle={this.state.header.subtitle}
          btnText={this.state.header.btnText}
          />
        </header>

        {/** About Components */}
        <SectionTitle style={classes.sectionTitle}>About</SectionTitle>





      </div>
    );
  }
}

export default App;
