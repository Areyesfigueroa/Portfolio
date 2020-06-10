import React, { Component } from 'react';
import classes from './App.module.css';

/** Components */
//UI
import PageTitle from '../components/PageTitle/PageTitle';
import Textbox from '../components/Textbox/Textbox';
import Cards from '../components/Cards/Cards';
import ProjectCards from '../components/ProjectCards/ProjectCards';
import Modal from '../components/Modal/Modal';
import ContactForm from '../components/ContactForm/ContactForm';
import PDFViewer from '../components/PDFViewer/PDFViewer';
import ScrollToTopBtn from '../components/ScrollToTopBtn/ScrollToTopBtn';

//Layout
import Navbar from '../components/Navbar/Navbar';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import Footer from '../components/Footer/Footer';


/** Waypoint Component */
import { Waypoint } from 'react-waypoint';

/** Scrollable Component */
import ScrollableAnchor from 'react-scrollable-anchor';

/** Bootstrap Component */
import Image from 'react-bootstrap/Image';

//Local Assets
import alielLogo from '../assets/aliel-logo.png';
import cardBanner from '../assets/cardHeader.png';

//Carousel Assets
import {performanceEvalImgs, skateBuilderImgs, viParkingImgs, vgsImgs} from '../assets/_images';
import MagnifyImg from '../components/MagnifyImg/MagnifyImg';

class App extends Component {

  state = {
    headerInfo: {
      title: "Aliel Reyes",
      subtitle: "Software Developer", 
      btnText: "See Portfolio"
    },
    navbar: {
      stickyNav: true
    },
    cards: [
      {
        id: '0A', 
        icon: require('../assets/icons/frontend.png'),
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
        icon: require('../assets/icons/gears.png'),
        title: 'Server',
        items: [
          {id: "0", value: 'PHP'},
          {id: "1", value: 'Python'},
          {id: "2", value: 'MySQL'},
        ]
      },
      {
        id: '2C',
        icon: require('../assets/icons/wrench.png'),
        title: 'Tools',
        items: [
          {id: "0", value: 'NPM'},
          {id: "1", value: 'Git/Github'},
          {id: "2", value: 'SourceTree'},
          {id: "3", value: 'Appsheet'}
        ]
      }
    ],
    projectCards: [
      {
        id: 0,
        icon: require('../assets/icons/search.png'),
        title: 'VGScout',
        shortDesc: "Learn more about your favorite video game.",
        longDesc: "Allows the user to search through a database of video games to get informations such as who are the developers, publishers, reviews and more. It also includes a reddit comments section where you can view what everyone else has said about the game.",
        techDesc: 'This web app was built using React, Axios(Promise based HTTP client for the browser and node.js) and RAWG Database and API.',
        banner: cardBanner,
        background: vgsImgs.bg,
        showText: false,
        images: vgsImgs,
        links: {
          websiteURL: 'https://vgscout.netlify.app/',
          githubURL: 'https://github.com/Areyesfigueroa/VideoGameSearch'
        } 
      },
      {
        id: 1,
        icon: require('../assets/icons/skate.png'),
        title: 'Skate Builder',
        shortDesc: "Create your own custom skateboard",
        longDesc: "Allows for the user to see their dream skateboard in 3D and orbit around it. User can modify the board components such as the wheels, trucks, bottom of the board and the top of the board.",
        techDesc: 'This web app was built using React, P5 react library for the 3D interactions and React Bootstrap for the styling.',
        banner: cardBanner,
        background: skateBuilderImgs.bg,
        showText: false,
        images: skateBuilderImgs,
        links: {
          websiteURL: 'https://skatebuilder.netlify.com/',
          githubURL: 'https://github.com/Areyesfigueroa/SkateBuilder'
        } 
      },
      {
        id: 2,
        title: 'Evaluation Portal',
        icon: require('../assets/icons/eval.png'),
        shortDesc: "Employee Web Portal",
        longDesc: "Performance evaluation is a web app where an employee can log in and see their performance evaluations submitted by their managers so that the employee can self-improve. If the user has admin privileges they can manage other user’s roles, passwords resets, user creation and deletion.",
        techDesc: 'The website is built using HTML, CSS, Javascript, and Bootstrap for Front End and PHP for backend alongside MySQL as the database.',
        banner: cardBanner,
        background: performanceEvalImgs.bg,
        showText: false,
        images: performanceEvalImgs, 
        links: {
          websiteURL: 'https://performance-eval.herokuapp.com/LoginSystem/login.php',
          githubURL: 'https://github.com/Areyesfigueroa/Performance-Evaluation'
        }
      },
      {
        id: 3,
        icon: require('../assets/icons/car.png'),
        title: 'Vi Parking App',
        shortDesc: 'Parking Management Software',
        longDesc: 'All About Parking vehicle management app for valets at the Vi. Keeps track of vehicle information to easily monitor and update vehicle location and status. This app has been used in operations for over a year and it is still being used to this date within the company.',
        techDesc: 'Built using Appsheet, Google App Scripts API and Javascript',
        banner: cardBanner,
        background: viParkingImgs.bg,
        showText: false,
        images: viParkingImgs,
        links: {
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
      cardID: 0,
      zoomedIn: false,
      currentSlide: null
    },
    scrollToTopBtn: {
      show: false
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

  downloadResumeHandler = () => {
    window.location.replace("https://drive.google.com/uc?export=download&id=1FzkRnVOwaer8NLJXFFCxQWSBc5_r9A5s");
  }

  scrollToTopBtnFadeHandler = (showBtn) => {
    this.setState({
      scrollToTopBtn: {
        show: showBtn
      }
    });
  }

  enableZoom = (slideData) => {
    if(this.state.zoomedIn) return;
    console.log("Enable Zoom");

    let newModal = {...this.state.modal};
    newModal.zoomedIn = true;
    newModal.currentSlide = slideData.src;
    
    this.setState({ modal: newModal });
  }

  disableZoom = () => {
    console.log("disable", this.state.modal.zoomedIn);
    if(this.state.zoomedIn === false) return;
    console.log("Disable Zoom", this.state.zoomedIn);
    
    let newModal = {...this.state.modal};
    newModal.zoomedIn = false;

    this.setState({ modal: newModal });
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
          enableZoom={this.enableZoom}
          />
        );
      }
    }

    return (
      <div className="App">

       {this.state.modal.zoomedIn ? <MagnifyImg src={this.state.modal.currentSlide} alt={'test'} clicked={this.disableZoom}/>: null}

        {/** Header Section */}
        <ScrollableAnchor id={'header'}>
            <Waypoint 
            onEnter={()=>this.scrollToTopBtnFadeHandler(false)} 
            onLeave={()=>this.scrollToTopBtnFadeHandler(true)}
            topOffset={"115px"}>
              <header>
                <Navbar img={alielLogo} />
                <PageTitle
                title={this.state.headerInfo.title}
                subtitle={this.state.headerInfo.subtitle}
                btnText={this.state.headerInfo.btnText}
                />
              </header>
            </Waypoint>
          </ScrollableAnchor>

        {/** About Section */}
        <SectionWrapper title="About" scrollID={'aboutSection'}>
          <Textbox>
            <p><Image src={require('../assets/icons/about-icon.png')} fluid/></p>
            <p>Hello my name is Aliel Reyes, I am a Software Developer based out of
            the bay area.</p>
            <p>I consider myself a flexible engineer that loves to explore new technologies. 
            I am currently working for a company creating Javascript tools that 
            facilitate data management.</p>
            <p>Currently, my passion is in creating web applications as a Front End Developer 
            but my goal is to become a Full-Stack Developer.</p>
            <p>Please take a look around my site at some of my different web application projects. 
            Feel free to reach out to me and let me know what you think.</p>
          </Textbox>
        </SectionWrapper>
        
        {/** Resume Section */}
        <SectionWrapper title="Resume" scrollID={'resumeSection'}>
          <PDFViewer 
          file={require('../assets/documents/AlielReyesResume-2020.pdf')}
          height={1000}
          />
          <button className={classes.button} onClick={this.downloadResumeHandler}>Download Resume</button>
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

        {/* Fixed Layout Section */}
        <ScrollToTopBtn show={this.state.scrollToTopBtn.show}/>

        <Footer />
      </div>
    );
  }
}

export default App;
