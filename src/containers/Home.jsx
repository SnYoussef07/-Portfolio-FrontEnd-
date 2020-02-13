import React, {Component} from 'react';
import '../css/index.css'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Skills from "./Skills";
import Projects from "./Projects";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default Home;
