import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
import Navbar from '../components/Header/Navbar';
import PageTitle from '../components/Header/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Textbox from '../components/About/Textbox';
import Button from '../components/Button/Button';
import Cards from '../components/Cards/Cards';

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

        {/** Header Section */}
        <header class>
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

        {/** About Section */}
        <section className={classes.aboutSection}>
          <SectionTitle style={classes.sectionTitle}>About</SectionTitle>
          <Textbox style={classes.textbox}>
            Hello my name is Aliel Reyes, I am a Front End Engineer based in 
            the bay area.
            <br/><br/>

            I consider myself a tinkerer, I love to explore new technologies. I 
            am currently working for a company creating Javascript tools and 
            data management.
            <br/><br/>

            I am focused in creating web applications as a Front End Engineer 
            but my goal is to become a full stack developer.
            <br/><br/>

            I look forward to meeting future employers.
          </Textbox>
          <Button>Download Resume</Button>
        </section>

        {/** Technologies Section */}
        <section className={classes.techSection}>
          <SectionTitle style={classes.sectionTitle}>Technologies</SectionTitle>
          <Cards />
        </section>





      </div>
    );
  }
}

export default App;
