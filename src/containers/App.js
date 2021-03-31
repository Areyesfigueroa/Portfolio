import React, { useState } from 'react';
import ReactGA from 'react-ga';

/** Components */
//UI
import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import ResumeSection from '../components/Sections/ResumeSection/ResumeSection';
import TechnologiesSection from '../components/Sections/TechnologySection/TechnologySection';
import ProjectSectionContainer from './Sections/ProjectSectionContainer/ProjectSectionContainer';
import ContactSection from '../components/Sections/ContactSection/ContactSection';

import ScrollToTopBtn from '../components/ScrollToTopBtn/ScrollToTopBtn';

//Layout
import Footer from '../components/Footer/Footer';

//Carousel Assets
import MagnifyImg from '../components/MagnifyImg/MagnifyImg';

//Hooks
import useModal from '../hooks/useModal';

const App = () => {

  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [modal, showModalHandler, closeModalHandler, enableZoomHandler, disableZoomHandler] = useModal();

  const scrollToTopBtnFadeHandler = (showBtn) => {
    setShowScrollToTopBtn(showBtn);
  }

  const initializeGoogleAnalytics = () => {
    const trackingId = "UA-164947982-1"; // Replace with your Google Analytics tracking ID
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  initializeGoogleAnalytics();

  return (
    <div className="App">

      {modal.zoomedIn ? <MagnifyImg src={modal.currentSlide} alt={'test'} clicked={disableZoomHandler} /> : null}

      <Header showScrollBtn={scrollToTopBtnFadeHandler}/>
      <AboutSection />
      <TechnologiesSection />
      <ProjectSectionContainer 
      modal={modal} 
      showModalHandler={showModalHandler}
      closeModalHandler={closeModalHandler}
      enableZoomHandler={enableZoomHandler} />
      <ResumeSection />
      <ContactSection />

      {/* Fixed Layout Section */}
      <ScrollToTopBtn show={showScrollToTopBtn}/>

      <Footer />
    </div>
  );
}

export default App;
