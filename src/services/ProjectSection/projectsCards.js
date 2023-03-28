import { fantasyStocksProject } from './Projects/fantasyStocksProject';
import { tweetFeedProject } from './Projects/tweetFeedProject';
import { vgScoutProject } from './Projects/vgScoutProject';
import { starwarsAPIProject } from './Projects/starwarsAPIProject';
import { snakeGameProject } from './Projects/snakeGameProject';
import { skateBuilderProject } from './Projects/skateBuilderProject';
import { checklistProject } from './Projects/checklistProject';
import { mlsPageProject } from './Projects/mlsPageProject';
import { buyerOfferProject } from './Projects/buyerOfferProject';
import { pricingPackageProject } from './Projects/pricingPackageProject';
import { voicemailProject } from './Projects/voicemailProject';
import { zipPageProject } from './Projects/zipsPageProject';

const projectCards = [
    checklistProject,
    voicemailProject,
    buyerOfferProject,
    zipPageProject,
    mlsPageProject,
    pricingPackageProject,
    fantasyStocksProject,
    tweetFeedProject,
    vgScoutProject,
    snakeGameProject,
    starwarsAPIProject,
    skateBuilderProject,
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