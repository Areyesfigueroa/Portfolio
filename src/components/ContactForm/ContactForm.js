import React from 'react';
import classes from '../../containers/App.module.css';

const ContactForm = () => {
    return (
        <div>
            <form className={classes.contactForm} method="POST">
                <input type="hidden" name="form-name" value="contact"/>
                <input type='text' name="name" id='name' placeholder='Name'/>
                <input type='email' name="email" id='email' placeholder='Enter Email'/>
                <textarea id='message' name="message" name='message' placeholder='Your Message'></textarea>
                <input className={classes.button} type='submit' name="submit" id='submitBtn' value='Submit'/>
            </form>
        </div>
    );
};

export default ContactForm;