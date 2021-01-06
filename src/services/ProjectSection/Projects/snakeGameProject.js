import { snakeGameImgs } from '../../../assets/_images';

const snakeGameProject = {
    icon: require('../../../assets/icons/snake.png'),
    title: 'Snake Game',
    shortDesc: "The application is based on the classic Snake Game",
    longDesc: "The application was developed to experiment and get familiar with JavaScript canvas. The game is based on the classic snake game, where you control a snake that increases in length every time it eats an apple. The snake can be moved in four different directions using a grid-style system. You can do everything you could in the classic snake game, plus I added a small leaderboard so that you can always try to beat your last score.",
    techDesc: [
        "Frontend: HTML, CSS, JavaScript"
    ],
    background: snakeGameImgs.bg,
    showText: false,
    images: snakeGameImgs,
    links: {
        websiteURL: "https://areyesfigueroa.github.io/SnakeGame/",
        githubURL: "https://github.com/Areyesfigueroa/SnakeGame"
    }
}

export { snakeGameProject }