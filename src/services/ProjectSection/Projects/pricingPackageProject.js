import img1 from '../../../assets/pricing-package-imgs/pricingPage1.png'
import img2 from '../../../assets/pricing-package-imgs/pricingPage2.png'
import demo from '../../../assets/pricing-package-imgs/pricingPackageDemo.gif'


const pricingPackageImgs = {
    bg: img1,
    slides: [        
        {src: demo, alt: "Demo Gif"},
        {src: img1, alt: "Interactive Page 1"},
        {src: img2, alt: "Interactive Page 2"},
    ]
}

const pricingPackageProject = {
    title: 'Pricing Package Section',
    company: 'HomeLister',
    position: 'Jr Full Stack Developer',
    shortDesc: "Implemented custom components to spec as specified by design team",
    longDesc: "Implemented client facing custom components to spec from scratch for the Pricing Package section. I also implemented the backend endpoints and patches to implement the ability to change the pricing packages per state.",
    techDesc: [
        "Frontend: React, TypeScript, Next.js",
        "Backend: Node.js, Express.js, Jest",
        "Database: MongoDB"
    ],
    background: pricingPackageImgs.bg,
    showText: false,
    images: pricingPackageImgs,
}

export { pricingPackageProject }