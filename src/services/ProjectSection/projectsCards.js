import { fantasyStocksProject } from './Projects/fantasyStocksProject';
import { tweetFeedProject } from './Projects/tweetFeedProject';
import { vgScoutProject } from './Projects/vgScoutProject';
import { starwarsAPIProject } from './Projects/starwarsAPIProject';
import { snakeGameProject } from './Projects/snakeGameProject';
import { skateBuilderProject } from './Projects/skateBuilderProject';

const projectCards = [
    fantasyStocksProject,
    tweetFeedProject,
    vgScoutProject,
    snakeGameProject,
    starwarsAPIProject,
    skateBuilderProject
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