import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
import Navbar from '../components/Header/Navbar';
import PageTitle from '../components/Header/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Textbox from '../components/About/Textbox';
import Button from '../components/Button/Button';
import Card from '../components/Cards/Card/Card';
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
    cards: [
      {
        id: '0', 
        title: 'Frontend',
        items: [
          {id: '0', value: 'HTML'},
          {id: '1', value: 'CSS'},
          {id: '2', value: 'Javascript'},
          {id: '3', value: 'React'}
        ]
      }, 
      {
        id: '1',
        title: 'Server',
        items: [
          {id: "0", value: 'PHP'},
          {id: "1", value: 'Python'}
        ]
      },
      {
        id: '2',
        title: 'Tools',
        items: [
          {id: "0", value: 'NPM'},
          {id: "1", value: 'Git'},
          {id: "2", value: 'Github'},
          {id: "3", value: 'SourceTree'}
        ]
      }
    ]
  }

  render() {
    
    const headerInfo = {
      title: "Aliel Reyes",
      subtitle: "Front End Engineer", 
      btnText: "See Portfolio"
    };

    return (
      <div className="App">

        {/** Header Section */}
        <header>
          <Navbar 
          style={classes.navbar}
          img={alielLogo}
          />
          <PageTitle 
          style={classes.pageTitle}
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
          btnText={headerInfo.btnText}
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
        <section>
          <SectionTitle style={classes.sectionTitle}>Technologies</SectionTitle>
          <div className={classes.cards}>
            <Cards cards={this.state.cards}/>
          </div>
        </section>





      </div>
    );
  }
}

export default App;
