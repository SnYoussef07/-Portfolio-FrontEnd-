import React, {Component} from 'react';
import '../css/adminPage.css'
import ProjectForm from "./ProjectForm";
import SkillForm from "./SkillForm";

class AdminPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 side-menu">
                        <h4><a href="#">Home</a></h4>
                        <div className="nav flex-column">
                            <a className="nav-link " href="#">Projects</a>
                            <a className="nav-link" href="#">Skills</a>
                            <a className="nav-link" href="#">Message</a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <ProjectForm/>
                        <SkillForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;