import img1 from '../../../assets/zips-imgs/zips1.png'
import img2 from '../../../assets/zips-imgs/zips2.png'
import demo from '../../../assets/zips-imgs/zipsDemo.gif'

const zipImgs = {
  bg: img2,
  slides: [
    { src: demo, alt: 'Demo Gif' },
    { src: img1, alt: 'Interactive Page 1' },
    { src: img2, alt: 'Interactive Page 2' }
  ]
}

const zipPageProject = {
  title: 'Zips Page',
  company: 'HomeLister',
  position: 'Full Stack Developer',
  shortDesc: 'Allows brokerage team to manage zip codes for an MLS',
  longDesc:
    'Allows for the brokerage team to manage MLS zip codes. I added the ability to import zip codes as a CSV file. However, the brokerage team can add or edit the imported zip codes before committing them to the database. Once added, the zip codes can still be edited by clicking on the cell. Saving zip code data is integrated with other business logic within the HomeListed codebase.',
  techDesc: [
    'Frontend: React, TypeScript, Next.js, Antd',
    'Backend: Node.js, Express.js, Jest',
    'Database: MongoDB'
  ],
  background: zipImgs.bg,
  showText: false,
  images: zipImgs
}

export { zipPageProject }
