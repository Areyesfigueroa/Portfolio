import React from 'react';
import classes from './ModalButtons.module.css';
import Button from '../../Button/Button';

const ModalButtons = ({ websiteURL, githubURL }) => {
    //Open URL Page on new tab
    const openURL = (url) => {
        //If url is blank exit.
        if(!url) return;

        const win = window.open(url, '_blank');
        if(win != null) win.focus();
    }
    return (
        <div className={classes.ModalButtons}>
            {websiteURL ? 
            <Button click={()=>openURL(websiteURL)} >Visit Website</Button>
            :
            <p style={{padding: '4px'}}>Website Not Available</p>}

            {githubURL ?
            <Button click={()=>openURL(githubURL)} >Visit Github</Button>
            :
            <p style={{padding: '4px'}}>Confidential Github</p>}
        </div>  
    );
};

export default ModalButtons;