import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container text-center">
                <a>
                    <FontAwesomeIcon icon={faArrowUp} className="text-light fa-arrow-up" dest="intro"/>
                </a>
                <div className="my-5 icon">
                    <a href="https://www.linkedin.com/in/youssef-snoussi-873998180/"><i className=" fab fa-linkedin-in
                       fa-2x mr-4 p-3"/></a>
                    <a href="https://github.com/SnYoussef07">
                        <i className="fab fa-github fa-2x p-3 "/>
                    </a>
                </div>
                <div className="info-box text-center">
                    <div className="footnote">
                        Snoussi Youssef <span className="highlight"><Link to={"/admin-snouss"}>©2019</Link></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
