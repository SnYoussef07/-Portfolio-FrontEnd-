import React from 'react';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container text-center">
                <a href="#intro">
                    <i className="fas fa-arrow-up text-light" dest="intro"/>
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
                        Snoussi Youssef <span className="highlight">©2019</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer