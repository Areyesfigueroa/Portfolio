import React, { useState } from 'react';
import ProjectSection from '../../../components/Sections/ProjectSection/ProjectSection';
import Modal from '../../../components/Modal/Modal';

//TODO: Implement project cards.
import {
    performanceEvalImgs, 
    skateBuilderImgs, 
    viParkingImgs, 
    vgsImgs,
    fantasyStockImgs,
    tweetFeedImgs,
    starwarsAPIImgs,
    snakeGameImgs,
    calculatorImgs
} from '../../../assets/_images';

const ProjectSectionContainer = (props) => {

    const [cards, setCards] = useState(
        [
            {
                id: 0,
                icon: require('../../../assets/icons/search.png'),
                title: 'VGScout',
                shortDesc: "Learn more about your favorite video game",
                longDesc: "Allows the user to search through a database of video games to get informations such as who are the developers, publishers, reviews and more. It also includes a reddit comments section where you can view what everyone else has said about the game.",
                techDesc: 'This web app was built using React, Axios(Promise based HTTP client for the browser and node.js) and RAWG Database and API.',
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
                icon: require('../../../assets/icons/skate.png'),
                title: 'Skate Builder',
                shortDesc: "Create your own custom skateboard",
                longDesc: "Allows for the user to see their dream skateboard in 3D and orbit around it. User can modify the board components such as the wheels, trucks, bottom of the board and the top of the board.",
                techDesc: 'This web app was built using React, P5 react library for the 3D interactions and React Bootstrap for the styling.',
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
                icon: require('../../../assets/icons/eval.png'),
                shortDesc: "Employee Web Portal",
                longDesc: "Performance evaluation is a web app where an employee can log in and see their performance evaluations submitted by their managers so that the employee can self-improve. If the user has admin privileges they can manage other user’s roles, passwords resets, user creation and deletion.",
                techDesc: 'The website is built using HTML, CSS, Javascript, and Bootstrap for Front End and PHP for backend alongside MySQL as the database.',
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
                icon: require('../../../assets/icons/car.png'),
                title: 'Vi Parking App',
                shortDesc: 'Parking Management Software',
                longDesc: 'All About Parking vehicle management app for valets at the Vi. Keeps track of vehicle information to easily monitor and update vehicle location and status. This app has been used in operations for over a year and it is still being used to this date within the company.',
                techDesc: 'Built using Appsheet, Google App Scripts API and Javascript',
                background: viParkingImgs.bg,
                showText: false,
                images: viParkingImgs,
                links: {
                    websiteURL: null,
                    githubURL: null
                }
            },
            {
                id: 4,
                icon: require('../../../assets/icons/car.png'),
                title: 'Fantasy Stocks App',
                shortDesc: 'Use fake money to trade stock shares from your favorite companies',
                longDesc: 'This project utilizes the IEX Cloud API to fetch stock information, which communicates with my internal API using Nodejs and Expressjs. In this application, users can register or log in to their account, which uses fake money stored on my database to buy or sell shares from various companies. It also uses visuals from the Google graphs library to help the user make the most out of trading shares.',
                techDesc: 'Built using React.js for the frontend, Node.js and Express.js for the backend, IEX Cloud, Heroku',
                background: fantasyStockImgs.bg,
                showText: false,
                images: fantasyStockImgs,
                links: {
                    websiteURL: "https://ar-fantasy-stock.herokuapp.com/",
                    githubURL: "https://github.com/Areyesfigueroa/Fantasy-Stock-Trading"
                }
            }
        ]
    );

    const cardTextHandler = (id, isActive) => {
        //Get the index
        const cardIndex = cards.findIndex((card) => card.id === id);

        //get a copy of the state card
        const card = { ...cards[cardIndex] };

        //Change the showText status.
        card.showText = isActive; 

        //get a copy of project cards and add the new changed card to it. 
        const newCards = [...cards];
        newCards[cardIndex] = card;

        //set the state
        setCards(newCards);
    }

    const modalHandler = () => {
        if(!props.modal.closeModal) {
            return(
              <Modal
              id={props.modal.id}
              card={cards[props.modal.cardID]}
              modal={props.modal} 
              clicked={(event) => props.closeModalHandler(event)}
              enableZoom={props.enableZoomHandler}
              />
            );
          }
    }    

    return (     
        <ProjectSection 
        cards={cards} 
        cardTextHandler={cardTextHandler}
        clicked={props.showModalHandler}
        modalHandler={modalHandler}/>
    );
};

export default ProjectSectionContainer;