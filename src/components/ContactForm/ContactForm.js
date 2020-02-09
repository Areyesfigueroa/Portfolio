import React from 'react';
import classes from '../../containers/App.module.css';

const ContactForm = () => {
    return (
        <div>
            <form className={classes.contactForm} action="POST" data-netlify="true">
                <input type='text' id='name' placeholder='Name'/>
                <input type='email' id='email' placeholder='Enter Email'/>
                <textarea id='message' placeholder='Your Message'></textarea>
                <div data-netlify-recaptcha="true"></div>
                <input className={classes.button} type='submit' id='submitBtn' value='Submit'/>
            </form>
        </div>
    );
};

export default ContactForm;