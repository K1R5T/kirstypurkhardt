import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <Link to="/">
                    <h2 className="navwelcome">Welcome</h2>
                </Link>
                <ul className="navbarUL">

                    <Link to="/Home">
                        <li className="homeLink">Home</li>
                    </Link>

                    <Link to="/AboutMe">
                        <li className="aboutmeLink">About-Me</li>
                    </Link>

                    <Link to="/CodeNation">
                        <li className="codenationLink">Code-Nation</li>
                    </Link>

                    <Link to="/ExternalLinks">
                        <li className="externalLI">External-Links</li>
                    </Link>

                    <Link to="/Projects">
                        <li className="projectsLi">Projects</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
