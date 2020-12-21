import { fantasyStocksProject } from './Projects/fantasyStocksProject';
import { tweetFeedProject } from './Projects/tweetFeedProject';
import { vgScoutProject } from './Projects/vgScoutProject';
import { starwarsAPIProject } from './Projects/starwarsAPIProject';
import { snakeGameProject } from './Projects/snakeGameProject';
import { calculatorProject } from './Projects/calculatorProject';
import { skateBuilderProject } from './Projects/skateBuilderProject';
import { performanceEvalProject } from './Projects/performanceEvalProject';
import { viParkingAppProject } from './Projects/viParkingAppProject';

const projectCards = [
    fantasyStocksProject,
    tweetFeedProject,
    vgScoutProject,
    starwarsAPIProject,
    snakeGameProject,
    calculatorProject,
    skateBuilderProject,
    performanceEvalProject,
    viParkingAppProject
]

const getProjectCards = () => {
    return projectCards.map((card, idx) => {
        card.id = idx;
        return card;
    });
}

export {
    getProjectCards
}