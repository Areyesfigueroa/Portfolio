import { starwarsAPIImgs } from '../../../assets/_images';

const starwarsAPIProject =     {
    title: 'Star Wars API',
    shortDesc: "Search through all of Star Wars characters and their details",
    longDesc: "This application's goal was to gain more experience with API requests and Heroku as a hosting platform. In this app, you can search through all of Star Wars characters and learn more about them. I am using swapi(Star Wars API) to get the data using the Axios package. On the other hand, I used react-bootstrap to put together a dynamic table, a search bar, and a pagination feature that all work together to deliver a more refined experience. Also, if you feel the Star Wars spirit, you can always immerse yourself further by clicking on the volume button to enable one of the Star Wars classic soundtracks while you learn more about its characters. This project was a lot of fun to make, and I learned a lot about Heroku, creating a dynamic, searchable table and how to cache data from the APIs to reduce the number of calls.",
    techDesc: [
        "React, project was created using create-react-app",
        "Heroku, hosting platform",
        "React Bootstrap, used for searchbar, table and pagination for initial styling and structure",
        "Axios, Promise based HTTP client for the browser and node.js"
    ],
    background: starwarsAPIImgs.bg,
    showText: false,
    images: starwarsAPIImgs,
    links: {
        websiteURL: "https://ar-starwars-table.herokuapp.com/",
        githubURL: "https://github.com/Areyesfigueroa/Star-Wars-API"
    }
}

export { starwarsAPIProject }