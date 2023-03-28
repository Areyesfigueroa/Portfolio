import img1 from '../../../assets/mls-page-imgs/mlsPage1.png'
import img2 from '../../../assets/mls-page-imgs/mlsPage2.png'
import demo from '../../../assets/mls-page-imgs/mlsPageDemo.gif'

const mlsImgs = {
    bg: img1,
    slides: [        
        {src: demo, alt: "Demo Gif"},
        {src: img1, alt: "Interactive Page 1"},
        {src: img2, alt: "Interactive Page 2"},
    ]
}

const mlsPageProject = {
    title: 'MLS Pages and Form',
    company: 'HomeLister',
    position: 'Jr Full Stack Developer',
    shortDesc: "Rebuilt legacy Angular to React pages and implemented new design features.",
    longDesc: "Rebuilt MLS(Multiple Listing Service) pages from Angular to React and added new design features. Brokerage utilized the MLS pages to store MLS information on our servers, and the entered MLS information is utilized in some of the business logic throughout our internal admin application.",
    techDesc: [
        "Frontend: React, TypeScript, Next.js, Antd",
        "Backend: Node.js, Express.js, Jest",
        "Database: MongoDB"
    ],
    background: mlsImgs.bg,
    showText: false,
    images: mlsImgs,
}

export { mlsPageProject }