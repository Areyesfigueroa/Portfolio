import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Waypoint } from 'react-waypoint';
import SplashScreen from '../SplashScreen/SplashScreen';
import Navbar from '../Navbar/Navbar';
import alielLogo from '../../assets/aliel-logo.png';

const Header = (props) => {

    return (
        <ScrollableAnchor id={'header'}>
            <Waypoint 
            onEnter={()=>props.showScrollBtn(false)} 
            onLeave={()=>props.showScrollBtn(true)}
            topOffset={"115px"}>
                <div>
                    <Navbar img={alielLogo} />  

                    <SplashScreen
                    title="Aliel Reyes" 
                    subtitle="Software Developer" 
                    btnText="See Portfolio" />
                </div>
            </Waypoint>
        </ScrollableAnchor>
    );
};

export default Header;