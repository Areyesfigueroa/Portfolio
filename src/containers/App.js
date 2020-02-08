import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import Textbox from '../components/Textbox/Textbox';
import Cards from '../components/Cards/Cards';
import ProjectCards from '../components/ProjectCards/ProjectCards';
import Modal from '../components/Modal/Modal';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

/** Waypoint Component */
import { Waypoint } from 'react-waypoint';
import ScrollableAnchor from 'react-scrollable-anchor';

//Local Assets
import alielLogo from '../assets/aliel-logo.png';
import cardBanner from '../assets/cardHeader.png';
//import cardBackground from '../assets/skateboard-example.png';

//Carousel Assets
import {performanceEvalImgs, skateBuilderImgs, viParkingImgs} from '../assets/_images';

class App extends Component {

  state = {
    headerInfo: {
      title: "Aliel Reyes",
      subtitle: "Software Developer", 
      btnText: "See Portfolio"
    },
    navbar: {
      stickyNav: false
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
          {id: "1", value: 'Python'},
          {id: "2", value: 'MySQL'},
        ]
      },
      {
        id: '2C',
        title: 'Tools',
        items: [
          {id: "0", value: 'NPM'},
          {id: "1", value: 'Git/Github'},
          {id: "2", value: 'SourceTree'}
        ]
      }
    ],
    projectCards: [
      {
        id: 0,
        title: 'Skate Builder',
        shortDesc: "Create your own custom skateboard",
        longDesc: "Allows for the user to see their dream skateboard in 3D and orbit around it. User can modify the board components such as the wheels, trucks, bottom of the board and the top of the board.",
        techDesc: 'This web app was built using React, P5 react library for the 3D interactions and React Bootstrap for the styling.',
        banner: cardBanner,
        background: skateBuilderImgs.bg,
        showText: false,
        images: skateBuilderImgs,
        links: {
          demoURL: null,
          websiteURL: 'https://skatebuilder.netlify.com/',
          githubURL: 'https://github.com/Areyesfigueroa/SkateBuilder'
        } 
      },
      {
        id: 1,
        title: 'Performance Evaluation Portal',
        shortDesc: "Employee Web Portal",
        longDesc: "Performance evaluation is a web app where an employee can log in and see their performance evaluations submitted by their managers so that the employee can self-improve. If the user has admin privileges they can manage other user’s roles, passwords resets, user creation and deletion.",
        techDesc: 'The website is built using HTML, CSS, Javascript, and Bootstrap for Front End and PHP for backend alongside MySQL as the database.',
        banner: cardBanner,
        background: performanceEvalImgs.bg,
        showText: false,
        images: performanceEvalImgs, 
        links: {
          demoURL: null,
          websiteURL: 'http://performance-eval.000webhostapp.com/LoginSystem/login.php',
          githubURL: 'https://github.com/Areyesfigueroa/Performance-Evaluation'
        }
      },
      {
        id: 2,
        title: 'Vi Parking App',
        shortDesc: 'Parking Management Software',
        longDesc: 'All About Parking vehicle management app for valets at the Vi. Keeps track of vehicle information to easily monitor and update vehicle location and status. This app has been used in operations for over a year and it is still being used to this date within the company.',
        techDesc: 'Built using Appsheet, Google App Scripts API and Javascript',
        banner: cardBanner,
        background: viParkingImgs.bg,
        showText: false,
        images: viParkingImgs,
        links: {
          demoURL: null,
          websiteURL: null,
          githubURL: null
        }
      }
    ],
    modal: {
      id: 0,
      showModal: false,
      closeModal: true,
      animDuration: 200,
      cardID: 0
    }
  }

  showModal = (cardID) => {
    const animDuration = this.state.modal.animDuration;

    this.setState({
      modal: {
        id: 0,
        showModal: true,
        closeModal: false,
        animDuration: animDuration,
        cardID: cardID
      }
    });
  }

  closeModal = (event) => {
    const animDuration = this.state.modal.animDuration;
    const cardID = this.state.modal.cardID;

    //If I click on the modal's shadow.
    if(parseInt(event.target.id) === this.state.modal.id) {
      this.setState({
        modal: {
          id: 0,
          showModal: false,
          animDuration: animDuration,
          cardID: cardID
        }
      });

      setTimeout(()=>{
        this.setState({
          modal: {
            id: 0,
            closeModal: true,
            animDuration: animDuration,
            cardID: cardID
          }
        })
      }, animDuration);
    }
  }

  cardTextHandler = (id, isActive) => {
    //Get the index
    const cardIndex = this.state.projectCards.findIndex((card) => card.id === id);

    //get a copy of the state card
    const card = {
       ...this.state.projectCards[cardIndex]
    }

    //Change the showText status.
    card.showText = isActive; 

    //get a copy of project cards and add the new changed card to it. 
    const changedProjectCards = [...this.state.projectCards];
    changedProjectCards[cardIndex] = card;

    //set the state
    this.setState({
      projectCards: changedProjectCards
    });
  }

  showStickyNav = () => {
    console.log('Show Sticky Navbar: ' + true);
    this.setState({
      navbar: {
        stickyNav: true
      }
    });
  }

  hideStickyNav = () => {    
    console.log('Hide Sticky Navbar: ' + false);
    this.setState({
      navbar: {
        stickyNav: false
      }
    });
  }

  render() {
    
    const techCards = (
        <div className={classes.cards}>
          <Cards cards={this.state.cards}/>
        </div>
    );

    const projectCards = (
      <div className={classes.projectCards}>
        <ProjectCards 
        projectCards={this.state.projectCards}
        hover={this.cardTextHandler} 
        hoverExit={this.cardTextHandler}
        clicked={this.showModal}
        />
      </div>
    )

    const modalHandler = () => {      
      if(!this.state.modal.closeModal) {
        return(
          <Modal
          id={this.state.modal.id}
          card={this.state.projectCards[this.state.modal.cardID]}
          modal={this.state.modal} 
          clicked={(event) => this.closeModal(event)}
          />
        );
      }
    }

    return (
      <div className="App">

        {/** Header Section */}
        <ScrollableAnchor id={'header'}>
              <header>
                <Waypoint onEnter={this.hideStickyNav} onLeave={this.showStickyNav}>
                  <div>
                    <Navbar 
                    img={alielLogo}
                    stickyNav={this.state.navbar.stickyNav}
                    scrolled={this.navbarHandler}
                    />
                  </div>
                </Waypoint>
                <PageTitle 
                title={this.state.headerInfo.title}
                subtitle={this.state.headerInfo.subtitle}
                btnText={this.state.headerInfo.btnText}
                />
              </header>

        </ScrollableAnchor>

        {/** About Section */}
        <SectionWrapper title="About" scrollID={'aboutSection'}>
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
          <button>Download Resume</button>
        </SectionWrapper>

        {/** Technologies Section */}
        <SectionWrapper title="Technologies" scrollID={'technologiesSection'}>
          {techCards}
        </SectionWrapper>

        {/** Projects Section */}
        <SectionWrapper title="Projects" scrollID={'projectsSection'}>
          {projectCards}
          {modalHandler()}
        </SectionWrapper>

        {/** Contact Form Section */}
        <SectionWrapper title='Contact' scrollID={'contactSection'}>
          <ContactForm />
        </SectionWrapper>

        <Footer />
      </div>
    );
  }
}

export default App;
