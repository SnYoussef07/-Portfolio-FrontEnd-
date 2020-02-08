import React, {Component} from 'react';
import '../css/contact.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {sendEmail} from "../actions";
import * as validat from "../validations/index"


const FIELDS = {name: "name", email: "email", text: "text"};

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendSuccess: false
        }
    }

    renderInputComponent = field => {
        return (
            <div className="form-group">
                <input {...field.input} type={field.type} className="form-control mb-3"
                       placeholder={field.placeholder}/>
                {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
            </div>
        );
    };
    renderTextAreaComponent = field => {
        return (
            <div className="form-group">
                <textarea {...field.input} className="form-control mb-3"
                          placeholder={field.placeholder}/>
                {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
            </div>
        );
    };

    handleSubmit = (email) => {
        this.props.sendEmail(email);
        this.props.reset();
        this.setState({sendSuccess: true})
    };

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
                    {this.state.sendSuccess && <div className="alert alert-success" role="alert">
                        message sent successfully
                    </div>}
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="mb-5">
                        <Field
                            name={FIELDS.name}
                            component={this.renderInputComponent}
                            type="text"
                            placeholder="Name"
                        />
                        <Field
                            name={FIELDS.email}
                            component={this.renderInputComponent}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <Field
                            name={FIELDS.text}
                            component={this.renderTextAreaComponent}
                            placeholder="Your Message"
                        />
                        <button className="btn draw-border">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

const validate = values => {
    const errors = {};
    errors.name = validat.validateNotEmpty(values.name);
    errors.text = validat.validateNotEmpty(values.text);
    errors.email = validat.email(values.email);

    return errors;
};

const formContact = reduxForm({
    form: "FormContact",
    fields: Object.keys(FIELDS),
    validate
})(Contact);


const mapDispatchToProps = {
    sendEmail
};

export default connect(null, mapDispatchToProps)(formContact);
