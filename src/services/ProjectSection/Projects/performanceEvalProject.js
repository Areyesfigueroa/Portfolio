import { performanceEvalImgs } from '../../../assets/_images';

const performanceEvalProject = {
    title: 'Evaluation Portal',
    icon: require('../../../assets/icons/eval.png'),
    shortDesc: "Employee Web Portal",
    longDesc: "Performance evaluation is a web app where an employee can log in and see their performance evaluations submitted by their managers so that the employee can self-improve. If the user has admin privileges they can manage other user’s roles, passwords resets, user creation and deletion.",
    techDesc: [
        "Frontend: HTML, CSS, JavaScript, JQuery",
        "Backend: PHP",
        "Database: MySQL",
        "Database Service/Hosting Platform: Heroku"
    ],
    background: performanceEvalImgs.bg,
    showText: false,
    images: performanceEvalImgs,
    links: {
        websiteURL: 'https://performance-eval.herokuapp.com/LoginSystem/login.php',
        githubURL: 'https://github.com/Areyesfigueroa/Performance-Evaluation'
    }
}

export { performanceEvalProject }