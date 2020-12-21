import { skateBuilderImgs } from '../../../assets/_images';

const skateBuilderProject = {
    icon: require('../../../assets/icons/skate.png'),
    title: 'Skate Builder',
    shortDesc: "Create your own custom skateboard",
    longDesc: "I created the web application from prototyping and designing to coding it. The focus of the project was to take advantage of React's virtual dom to make a more dynamic application. I also wanted to implement react hooks to better organize my code and to increase performance as well.",
    techDesc: [
        "Frontend: HTML, CSS, JavaScript, React, P5",
        "Hosting Platform: Netlify"
    ],
    background: skateBuilderImgs.bg,
    showText: false,
    images: skateBuilderImgs,
    links: {
        websiteURL: 'https://skatebuilder.netlify.com/',
        githubURL: 'https://github.com/Areyesfigueroa/SkateBuilder'
    }
}

export { skateBuilderProject }