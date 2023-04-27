import React from 'react';

import Cards from '../../Cards/Cards';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';

import frontEndIcon from '../../../assets/icons/frontend.png';
import gearsIcon from '../../../assets/icons/gears.png';
import wrenchIcon from '../../../assets/icons/wrench.png';

const TechnologySection = () => {
    
    const cards = [
        {
            id: '0A',
            icon: frontEndIcon,
            title: 'Frontend',
            items: [
                { id: '1', value: 'React' },
                { id: '2', value: 'JavaScript' },
                { id: '3', value: 'TypeScript' },
                { id: '4', value: 'Next.js' },
                { id: '5', value: 'Redux.js' },
                { id: '6', value: 'HTML' },
                { id: '7', value: 'CSS' },
                { id: '8', value: 'Bootstrap' },
                { id: '9', value: 'Antd' },
            ]
        },
        {
            id: '1B',
            icon: gearsIcon,
            title: 'Server',
            items: [
                { id: '0', value: 'Node.js' },
                { id: '1', value: 'Express.js' },
                { id: '2', value: 'Jest' },
                { id: '3', value: 'PostgreSQL' },
                { id: '4', value: 'Prisma ORM' },
                { id: '5', value: 'MongoDB' },
                { id: '6', value: 'MySQL' },
            ]
        },
        {
            id: '2C',
            icon: wrenchIcon,
            title: 'Tools',
            items: [
                { id: '0', value: 'Git/Github' },
                { id: '1', value: 'NPM' },
                { id: '2', value: 'Docker' },
                { id: '3', value: 'Terminal' },
                { id: '4', value: 'Heroku' },
                { id: '5', value: 'Netlify' },
                { id: '6', value: 'Vercel' }
            ]
        }
    ];

    return (
        <SectionWrapper title="Technologies" scrollID={'technologiesSection'}>
            <Cards cards={cards} />
        </ SectionWrapper>
    );
};

export default TechnologySection;