import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addSkill} from "../actions/index";


const FIELDS = {name: "name", category: "category"};

class SkillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFileSkill: null,
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

    handleChange = e => {
        this.setState({currentFileSkill: e.target.files.item(0)});
    };
    handleSubmit = skill => {
        this.props.addSkill(skill, this.state.currentFileSkill);
    };

    render() {
        return (
            <div className="projects p-5 w-75 mx-auto border">
                <h3 className="border-bottom mb-5 py-3">Skills</h3>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <div className="form-group my-3">
                        <Field
                            name={FIELDS.name}
                            component={this.renderInputComponent}
                            type="text"
                            placeholder="Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleFormControlSelect1">Categories</label>
                        <Field name={FIELDS.category} component="select" className="form-control">
                            <option>HTML/CSS</option>
                            <option>Javascript</option>
                            <option>Back-End</option>
                            <option>Other</option>
                        </Field>
                    </div>
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" onChange={this.handleChange}/>
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

const formSkill = reduxForm({
    form: "FormSkill",
    fields: Object.keys(FIELDS)
})(SkillForm);

const mapDispatchToProps = {
    addSkill
};

export default connect(null, mapDispatchToProps)(formSkill);
