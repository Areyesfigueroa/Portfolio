import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Textbox from '../components/Textbox/Textbox';
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
    headerInfo: {
      title: "Aliel Reyes",
      subtitle: "Front End Engineer", 
      btnText: "See Portfolio"
    },
    cards: [
      {
        id: '0A', 
        title: 'Frontend',
        items: [
          {id: '0', value: 'HTML'},
          {id: '1', value: 'CSS'},
          {id: '2', value: 'Javascript'},
          {id: '3', value: 'React'}
        ]
      }, 
      {
        id: '1B',
        title: 'Server',
        items: [
          {id: "0", value: 'PHP'},
          {id: "1", value: 'Python'}
        ]
      },
      {
        id: '2C',
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
    
    const techCards = (
        <div className={classes.cards}>
          <Cards cards={this.state.cards}/>
        </div>
    );

    return (
      <div className="App">

        {/** Header Section */}
        <header>
          <Navbar img={alielLogo}/>
          <PageTitle 
          title={this.state.headerInfo.title}
          subtitle={this.state.headerInfo.subtitle}
          btnText={this.state.headerInfo.btnText}
          />
        </header>

        {/** About Section */}
        <SectionWrapper title="About">
          <Textbox>
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
        </SectionWrapper>

        {/** Technologies Section */}
        <SectionWrapper title="Technologies">
          {techCards}
        </SectionWrapper>


        {/* * Technologies Section
        <section>
          <div className={classes.container}>

          </div>
        </section> */}






      </div>
    );
  }
}

export default App;
