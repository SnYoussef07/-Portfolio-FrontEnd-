import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllProject} from "../actions/index";
import '../css/projects.css'
import ProjectItem from "../components/ProjectItem";

class Projects extends Component {
    componentDidMount() {
        this.props.getAllProject();
    }

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
                        {this.props.projects && this.props.projects.map(project => {
                            return (
                                <ProjectItem key={project.id} project={project}/>
                            )
                        })}
                        {/*Boucle ca */}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = {
    getAllProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);