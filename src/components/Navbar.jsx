import React from 'react';
import '../css/navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faAward, faProjectDiagram, faIdCard} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-flex fixed-top">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active px-5 py-2 nav1">
                        <a className="nav-link" href="#about">
                            <FontAwesomeIcon icon={faHome} className="mr-2"/>About
                        </a>
                    </li>

                    <li className="nav-item px-5 py-2 active">
                        <a className="nav-link" href="#skills"
                        ><FontAwesomeIcon icon={faAward} className="mr-2"/>Skills</a
                        >
                    </li>

                    <li className="nav-item px-5 py-2 active">
                        <a className="nav-link" href="#project"
                        ><FontAwesomeIcon icon={faProjectDiagram} className="mr-2"/>Project</a
                        >
                    </li>

                    <li className="nav-item px-5 py-2 active">
                        <a className="nav-link" href="#contact"
                        ><FontAwesomeIcon icon={faIdCard} className="mr-2"/>Contact</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar
