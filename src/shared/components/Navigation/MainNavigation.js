import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import MainHeader from './MainHeader'; 
import Links from './NavLinks'; 
import SideDrawer from './SideDrawer'; 
import './MainNavigation.css'; 
import BackDrop from '../UIElements/Backdrop'; 
import NavLinks from './NavLinks';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false); 

    const openDrawer = () => {
        setDrawerIsOpen(true); 
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false); 
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={closeDrawer} /> }
            { drawerIsOpen && (
                <SideDrawer show={drawerIsOpen}>
                        <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
            )} 
            <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link>
                    YourPlaces
                </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <Links />
            </nav>
        </MainHeader>
    </React.Fragment>
    ); 
}; 

export default MainNavigation; 