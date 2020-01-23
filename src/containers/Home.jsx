import React, {Component} from 'react';
import '../css/index.css'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header/>
                <About/>
                <div><h1>Hello</h1></div>
            </>
        );
    }
}

export default Home;