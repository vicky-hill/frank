import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../elements/Drawer';
import Searchbar from './Searchbar';

/* Props
=================================================== */
// authenticatd: Boolean
// username: String

function Navbar({ authenticated, username, logout }) {

    const [currentURL, setCurrentURL] = useState('register');

    // Toggle between Sign in and sign up
    function changeURL() {
        setCurrentURL(window.location.href);
    }

    // Mobile drawer
    function toggleDrawer() {
        const settings = document.getElementById("drawer");
        settings.classList.toggle("show-drawer");
    }

    // Logged In Navbar
    const loggedInNav = (
        <div className="nav">
            <Link to="/link1" className="nav-link">link 1</Link>
            <Link to="/link2" className="nav-link">link 2</Link>
            <Link to="/" className="nav-link" onClick={logout}>Log out</Link>
        </div>
    )

    // Logged out Navbar
    const loggedOutNav = (

        <div className="nav">
            {
                currentURL.includes('login') ?
                    <Link to="login" className="nav-link nav-link--signin" onClick={changeURL} >Sign in <i className="fas fa-sign-in-alt"> </i></Link> :
                    <Link to="register" className="nav-link nav-link--signin" onClick={changeURL}>Sign up <i className="fas fa-user-plus"> </i></Link>
            }
        </div>
    )



    return (
        <div className='header'>

            {/* Logo */}
            <Link to="/">
                <h1>Minite</h1>
            </Link>

            <Searchbar />



            {/* Desktop Menu */}
            { !authenticated ? loggedOutNav : loggedInNav}


            {/* Mobile Hamburger Menu */}
            {
                authenticated && (
                    <>
                        <div className="hamburger" onClick={toggleDrawer}>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                        </div>

                        <div className="drawer" id="drawer">
                            <Drawer authenticated={authenticated} username={username} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navbar;
