import img1 from '../../../assets/voicemail-imgs/voicemail1.png'
import img2 from '../../../assets/voicemail-imgs/voicemail2.png'
import img3 from '../../../assets/voicemail-imgs/voicemail3.png'
import demo from '../../../assets/voicemail-imgs/voicemailsPageDemo.gif'


const voicemailImgs = {
    bg: img1,
    slides: [        
        {src: demo, alt: "Demo Gif"},
        {src: img1, alt: "Interactive Page 1"},
        {src: img2, alt: "Interactive Page 1"},
        {src: img3, alt: "Interactive Page 1"},
    ]
}

const voicemailProject = {
    title: 'Voicemail Page',
    company: 'HomeLister',
    position: 'Full Stack Developer',
    shortDesc: "Allows brokerage team to manage company call voicemails from customers.",
    longDesc: "Saves company calls voicemails for the brokerage team to manage. The brokerage team can manage voicemails via the voicemails page and listen to the recordings via my custom-made audio player. They can also leave notes per voicemail to keep track of any necessary information. The team can also mark any voicemails received as completed to signify the voicemail has been addressed. I also added the ability to retrieve all the user and listing information based on the phone number left by the recorded voicemail. Allowing the team to access listings and user profiles associated with the voicemail.",
    techDesc: [
        "Frontend: React, TypeScript, Next.js, Antd",
        "Backend: Node.js, Express.js, Jest",
        "External API: Twilio",
        "Database: MongoDB"
    ],
    background: voicemailImgs.bg,
    showText: false,
    images: voicemailImgs,
}

export { voicemailProject }