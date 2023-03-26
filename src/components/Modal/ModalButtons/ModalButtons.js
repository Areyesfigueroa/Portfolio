import React from 'react';
import classes from './ModalButtons.module.css';
import Button from '../../Button/Button';

const ModalButtons = (props) => {
    //Open URL Page on new tab
    const openURL = (url) => {
        //If url is blank exit.
        if(!url) return;

        const win = window.open(url, '_blank');
        if(win != null) win.focus();
    }
    return (
        <div className={classes.ModalButtons}>
            {props.websiteURL ? 
            <Button click={()=>openURL(props.websiteURL)} >Visit Website</Button>
            :
            <p style={{padding: '4px'}}>Website Not Available</p>}

            {props.githubURL ?
            <Button click={()=>openURL(props.githubURL)} >Visit Github</Button>
            :
            <p style={{padding: '4px'}}>Confidential Github</p>}
        </div>  
    );
};

export default ModalButtons;