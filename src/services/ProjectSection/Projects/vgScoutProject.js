import { vgsImgs } from '../../../assets/_images';

const vgScoutProject = {
    icon: require('../../../assets/icons/search.png'),
    title: 'VGScout',
    shortDesc: "Application used to search for video game information and community posts.",
    longDesc: "Allows users to search any video games and get essential information such as Metacritic reviews, descriptions, gameplay preview, community posts and more.",
    techDesc: [
        "Frontend: HTML, CSS, JavaScript, React",
        "External API: RAWG",
        "Design Patterns/Techniques: Presentational and Container Components, AJAX",
        "Hosting Platform: Netlify"
    ],
    background: vgsImgs.bg,
    showText: false,
    images: vgsImgs,
    links: {
        // websiteURL: 'https://vgscout.netlify.app/',
        githubURL: 'https://github.com/Areyesfigueroa/VideoGameSearch'
    }
}

export { vgScoutProject }