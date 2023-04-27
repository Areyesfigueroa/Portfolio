import { tweetFeedImgs } from '../../../assets/_images'

const tweetFeedProject = {
  title: 'Tweet Feed',
  shortDesc:
    'The application utilizes twitter and an internal api to fetch and display filtered tweets',
  longDesc:
    "This project utilizes the Twitter API, which communicates with my internal API using Nodejs and Expressjs. In this application, you can search tweets in a user's timeline or use search all tweets by content. Users will also be able to see random tweets from my favorite list of Twitter user accounts, or you can press a button to select a random user and a random tweet from my list.",
  techDesc: [
    'HTML, CSS, JavaScript - Front End Stack',
    'React.js - Front End Library',
    'Node.js and Express.js - Backend Stack',
    'Heroku - Hosting Platform'
  ],
  background: tweetFeedImgs.bg,
  showText: false,
  images: tweetFeedImgs,
  links: {
    websiteURL: 'https://ar-tweet-feed.herokuapp.com/',
    githubURL: 'https://github.com/Areyesfigueroa/Tweet-Feed'
  }
}

export { tweetFeedProject }
