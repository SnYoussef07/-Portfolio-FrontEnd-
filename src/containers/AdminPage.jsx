import React, {Component} from 'react';
import '../css/adminPage.css'
import ProjectForm from "./ProjectForm";
import SkillForm from "./SkillForm";
import {Link} from "react-router-dom";

class AdminPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 side-menu">
                        <h4><Link className="nav-link" to={"/"}>Home</Link></h4>
                    </div>
                    <div className="col-lg-10">
                        <ProjectForm history={this.props.history}/>
                        <SkillForm history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;
