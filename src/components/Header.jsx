import React from 'react';
import '../css/header.css'

const Header = () => {
    return (
        <header id="intro" className="d-flex">
            <div
                className="intro-text d-flex flex-column justify-content-center align-items-center"
            >
                <div className="brand">
                    <h1>Snoussi Youssef</h1>
                    <div className="line-spacer"></div>
                    <div className="typewriter">
                        <div className="typewriter-text">
                            Developer Java Full Stack
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header