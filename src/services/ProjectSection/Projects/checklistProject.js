import checklistImg1 from '../../../assets/checklist-imgs/checklist1-min.png'
import checklistImg2 from '../../../assets/checklist-imgs/checklist2.png'
import checklistImg3 from '../../../assets/checklist-imgs/checklist3.png'
import checklistDemo from '../../../assets/checklist-imgs/checklistDemo.gif'

const checklistImgs = {
    bg: checklistImg1,
    slides: [        
        {src: checklistDemo, alt: "Demo Gif"},
        {src: checklistImg1, alt: "Interactive Page 1"},
        {src: checklistImg2, alt: "Interactive Page 2"},
        {src: checklistImg3, alt: "Interactive Page 3"},
    ]
}

const checklistProject = {
    title: 'Dynamic Checklist System',
    company: 'HomeLister',
    position: 'Full Stack Developer',
    shortDesc: "Dynamically created checklist items that get attached to a listing throughout it's lifecycle.",
    longDesc: "Allows the brokerage team to create and manage template checklist items that contain conditional properties and settings. After a template checklist item is made, this will then be dynamically attached to listings whose conditional properties and settings match that of the created checklist item. Once a checklist item is added to a listing, it will not be automatically removed. The Brokerage uses the checklist system to identify which tasks need to be completed throughout the lifetime of a listing. It also serves as a history log to see which checklist items have been completed.",
    techDesc: [
        "Frontend: React, TypeScript, Next.js, Antd",
        "Backend: Node.js, Express.js, Jest, Prisma ORM",
        "Database: PostgreSQL, MongoDB"
    ],
    background: checklistImgs.bg,
    showText: false,
    images: checklistImgs,
}

export { checklistProject }