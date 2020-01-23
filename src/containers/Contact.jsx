import React, {Component} from 'react';
import '../css/contact.css'

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 100 102"
                    height="75"
                    width="100%"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgcolor-light mb-5"
                >
                    <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"/>
                </svg>
                <div className="container text-center flex">
                    <h1 className="text-white">Contact</h1>
                    <hr className="hr-title mb-5"/>
                    <form className="mb-5">
                        <input type="text" className="form-control mb-3" placeholder="Name"/>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Enter email"
                        />
                        <textarea
                            name=""
                            id=""
                            cols="10"
                            rows="5"
                            className="form-control mb-5"
                            placeholder="Your Message"
                        />
                        <button className="btn draw-border">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;