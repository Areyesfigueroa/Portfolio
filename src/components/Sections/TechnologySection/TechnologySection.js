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
                { id: '0', value: 'HTML' },
                { id: '1', value: 'CSS' },
                { id: '2', value: 'Javascript' },
                { id: '3', value: 'React' }
            ]
        },
        {
            id: '1B',
            icon: gearsIcon,
            title: 'Server',
            items: [
                { id: "0", value: 'PHP' },
                { id: "1", value: 'Python' },
                { id: "2", value: 'MySQL' },
            ]
        },
        {
            id: '2C',
            icon: wrenchIcon,
            title: 'Tools',
            items: [
                { id: "0", value: 'NPM' },
                { id: "1", value: 'Git/Github' },
                { id: "2", value: 'SourceTree' },
                { id: "3", value: 'Appsheet' }
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