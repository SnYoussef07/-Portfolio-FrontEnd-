import React, {Component} from 'react';
import '../css/skills.css'

class Skills extends Component {
    render() {
        return (
            <section className="bg-light border-top border-bottom" id="skills">
                <div className="container-fluid">
                    <h1 className="text-center">
                        Skills
                    </h1>
                    <hr className="hr-title mb-5"/>
                    <div className="row py-5">
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light mb-4">HTML/CSS</h4>
                                    <div className="row text-center">
                                        {/* Boucle Ici */}
                                        <div className="col s4 m2">
                                            <img alt="" src="./img/html5.png" className="responsive-img"/>
                                            <p>HTML5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light mb-4">JavaScript</h4>
                                    <div className="row text-center">
                                        {/* Boucle Ici */}
                                        <div className="col s4 m2">
                                            <img
                                                alt=""
                                                src="./img/redux.png"
                                                className="responsive-img"
                                            />
                                            <p>Redux</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light mb-4">Back-End</h4>
                                    <div className="row text-center">
                                        {/* Boucle Ici */}
                                        <div className="col s4 m2">
                                            <img
                                                alt=""
                                                src="./img/MySQL.svg.png"
                                                className="responsive-img"
                                            />
                                            <p>MySQL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light mb-4">Other</h4>
                                    <div className="row text-center">
                                        {/* Boucle Ici */}
                                        <div className="col s4 m2">
                                            <img
                                                alt=""
                                                src="./img/photoshop.png"
                                                className="responsive-img"
                                            />
                                            <p>Photoshop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;