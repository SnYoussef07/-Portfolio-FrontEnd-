import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addSkill} from "../actions";

const FIELDS = {name: "name", link: "link", skills: "skills"};

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFileProject: null,
            skillChoice: []
        }
    }

    renderInputComponent = field => {
        return (
            <div className="form-group">
                <label className="mr-5">{field.label}</label>
                <input {...field.input} type={field.type} className="form-control"/>
                <p className="text-danger">{field.meta.error}</p>
            </div>
        );
    };

    addSkillToTab = (e, skill) => {
        this.setState(prevState => ({skillChoice: [...prevState.skillChoice, skill]}));
        e.target.classList.toggle("bg-success");
        e.target.classList.toggle("text-white");
        e.target.disabled = true;
    };

    handleChangeProject = e => {
        this.setState({currentFileProject: e.target.files.item(0)});
    };
    handleSubmit = project => {
        //this.props.addSkill(skill, this.state.currentFileSkill);
    };

    render() {
        return (
            <div className="projects p-5 w-75 mx-auto border">
                <h3 className="border-bottom mb-5 py-3">Project</h3>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <div className="form-group my-3">
                        <Field
                            name={FIELDS.name}
                            component={this.renderInputComponent}
                            type="text"
                            className="form-control"
                            label="Name"
                        />
                    </div>
                    <div className="row d-flex flex-row">
                        {this.props.skills && this.props.skills.map(skill => {
                            return (
                                <button onClick={(e) => this.addSkillToTab(e, skill)} key={skill.id}
                                        type="button" className="border m-2 p-2 ">{skill.name}</button>
                            )
                        })}
                    </div>
                    <div className="form-group my-3">
                        <Field
                            name={FIELDS.link}
                            component={this.renderInputComponent}
                            type="text"
                            className="form-control"
                            label="Link"
                        />
                    </div>
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" onChange={this.handleChangeProject}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose
                                file</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const formProject = reduxForm({
    form: "FormProject",
    fields: Object.keys(FIELDS)
})(ProjectForm);

const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(formProject);