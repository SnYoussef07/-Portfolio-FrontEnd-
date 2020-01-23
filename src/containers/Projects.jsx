import React, {Component} from 'react';
import '../css/projects.css'

class Projects extends Component {
    render() {
        return (
            <section className="mb-5" id="project">
                <div className="container">
                    <h1 className="text-center">
                        Projects
                    </h1>
                    <hr className="hr-title mb-5"/>
                    <div className="d-flex flex-row justify-content-center border-bottom py-4">
                        <button className="example_d mr-3">All</button>
                        <button className="example_d mr-3">Java / Spring</button>
                        <button className="example_d mr-3">React</button>
                        <button className="example_d mr-3">React Native</button>
                        <button className="example_d mr-3">Angular</button>
                    </div>
                    <div className="row py-5">
                        {/*Boucle ca */}
                        <div className="col-lg-4 text-center">
                            <figure className="imghvr-shutter-in-vert">
                                <img src="../img/pj1.jpg" alt="example-image"/>
                                <div className="btnPhone text-center">
                                    <a href="#" className="btn btn-info">View</a>
                                </div>
                                <figcaption>
                                    <h3 className="mb-3">Hello World</h3>
                                    <div className="mb-5">
                                        <span className="mr-2">
                                            <img
                                                src="./img/spring.png"
                                                alt=""
                                                width="40px"
                                                height="40px"
                                            />
                                        </span>
                                        <span className="mr-2">
                                            <img
                                                src="./img/react.png"
                                                alt=""
                                                width="40px"
                                                height="40px"
                                            />
                                        </span>
                                        <span className="mr-2">
                                            <img
                                                src="./img/html5.png"
                                                html
                                                alt=""
                                                width="40px"
                                                height="40px"
                                            />
                                        </span>
                                    </div>
                                    <a href="#" className="btn draw-border">View</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;