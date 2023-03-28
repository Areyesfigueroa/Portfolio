import img1 from '../../../assets/buyer-offer-imgs/buyerOffer1.png'
import img2 from '../../../assets/buyer-offer-imgs/buyerOffer2.png'
import demo from '../../../assets/buyer-offer-imgs/buyerOfferDemo.gif'


const buyerOfferImgs = {
    bg: img1,
    slides: [        
        {src: demo, alt: "Demo Gif"},
        {src: img1, alt: "Interactive Page 1"},
        {src: img2, alt: "Interactive Page 2"},
    ]
}

const buyerOfferProject = {
    title: 'Buyer Offer',
    company: 'HomeLister',
    position: 'Full Stack Developer',
    shortDesc: "Allows buyers to submit an offer to a listing and for the brokerage team to manage the offers.",
    longDesc: "Allows buyers to submit offers to any one listing. The brokerage team can add or edit buyer offers through the internal admin site.",
    techDesc: [
        "Frontend: React, TypeScript, Next.js, Antd",
        "Backend: Node.js, Express.js, Jest, Prisma ORM",
        "Database: PostgreSQL, MongoDB"
    ],
    background: buyerOfferImgs.bg,
    showText: false,
    images: buyerOfferImgs,
}

export { buyerOfferProject }