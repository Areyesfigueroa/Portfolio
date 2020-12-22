import React from 'react';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import ContactForm from '../../ContactForm/ContactForm';

const ContactSection = () => {
    return (
        <SectionWrapper title='Contact' scrollID={'contactSection'}>
            <ContactForm />
        </SectionWrapper>
    );
};

export default ContactSection;