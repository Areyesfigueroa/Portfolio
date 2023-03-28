import { fantasyStockImgs } from '../../../assets/_images';

const fantasyStocksProject = {
    title: 'Fantasy Stocks App',
    shortDesc: 'Use fake money to trade stock shares from your favorite companies',
    longDesc: 'This project utilizes the IEX Cloud API to fetch stock information, which communicates with my internal API using Nodejs and Expressjs. In this application, users can register or log in to their account, which uses fake money stored on my database to buy or sell shares from various companies. It also uses visuals from the Google graphs library to help the user make the most out of trading shares.',
    techDesc: [
        "HTML, CSS, JavaScript - Front End Stack",
        "React - Front End Framework",
        "Node.js and Express.js - Backend Stack and Internal API",
        "Postgre SQL - Database",
        "IEX Cloud API - RESTAPI",
        "Heroku - Hosting platform for both the web server and database"
    ],
    background: fantasyStockImgs.bg,
    showText: false,
    images: fantasyStockImgs,
    links: {
        websiteURL: "https://ar-fantasy-stock.herokuapp.com/",
        githubURL: "https://github.com/Areyesfigueroa/Fantasy-Stock-Trading"
    }
}

export { fantasyStocksProject }