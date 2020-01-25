import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllSkills} from "../actions/index";


import '../css/skills.css'

class Skills extends Component {
    componentDidMount() {
        this.props.getAllSkills();
    }

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
                                        {this.props.skills && this.props.skills.map(skill => {
                                            return (
                                                skill.category === "HTML/CSS" &&
                                                <div className="col s4 m2" key={skill.id}>
                                                    <img alt="" src={`http://localhost:8080/logoSkill/${skill.id}`}
                                                         className="responsive-img"/>
                                                    <p>{skill.name}</p>
                                                </div>
                                            )
                                        })}
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
                                        {this.props.skills && this.props.skills.map(skill => {
                                            return (
                                                skill.category === "Javascript" &&
                                                <div className="col s4 m2" key={skill.id}>
                                                    <img alt="" src={`http://localhost:8080/logoSkill/${skill.id}`}
                                                         className="responsive-img"/>
                                                    <p>{skill.name}</p>
                                                </div>
                                            )
                                        })}
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
                                        {this.props.skills && this.props.skills.map(skill => {
                                            return (
                                                skill.category === "Back-End" &&
                                                <div className="col s4 m2" key={skill.id}>
                                                    <img alt="" src={`http://localhost:8080/logoSkill/${skill.id}`}
                                                         className="responsive-img"/>
                                                    <p>{skill.name}</p>
                                                </div>
                                            )
                                        })}
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
                                        {this.props.skills && this.props.skills.map(skill => {
                                            return (
                                                skill.category === "Other" &&
                                                <div className="col s4 m2" key={skill.id}>
                                                    <img alt="" src={`http://localhost:8080/logoSkill/${skill.id}`}
                                                         className="responsive-img"/>
                                                    <p>{skill.name}</p>
                                                </div>
                                            )
                                        })}
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

const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
};


const mapDispatchToProps = {
    getAllSkills
};


export default connect(mapStateToProps, mapDispatchToProps)(Skills);