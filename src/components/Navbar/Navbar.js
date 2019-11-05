import React, {Fragment} from 'react';
import classes from '../../containers/App.module.css';
import SlideToggle from "react-slide-toggle";
import Media from 'react-media';

const navbar = (props) => {

    let classList = [classes.navbar];

    if(props.stickyNav) {
        classList = [classes.navbar, classes.stickyNavbar];
    }

    const navlinks = (collapse=false) => (
        <div className={classes.navbarContent}>
            <SlideToggle collapsed={collapse}
            render={({ toggle, setCollapsibleElement }) => (
                <div>
                    <div className={'my-collapsible'}>
                        <a className={classes.mobileNavbarBtn + ' ' + "my-collapsible__toggle"} onClick={toggle}>
                            <img src={require('../../assets/hamburger-menu.png')}/>
                        </a>
                    </div>
                    <div className={`my-collapsible__content ` + classes.navbarLinks} ref={setCollapsibleElement}>
                        <ul>
                            <li><a href="#aboutSection">About</a></li>
                            <li><a href="#technologiesSection">Technologies</a></li>
                            <li><a href="#projectsSection">Projects</a></li>
                            <li><a href="#contactSection">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
            />
        </div>
    )


    return (
        <div className={classList.join(' ')}>
            <a className={classes.homeBtn} href='#header'><img src={props.img} alt='Aliel Logo'/></a>

            <Media queries={{
            small: "(max-width: 600px)",
            medium: "(min-width: 601px)"
            }}>
            {matches => (
                <Fragment>
                {matches.small && navlinks(true)}
                {matches.medium && navlinks(false)}
                </Fragment>
            )}
            </Media>

        </div>
    );
};

export default navbar;