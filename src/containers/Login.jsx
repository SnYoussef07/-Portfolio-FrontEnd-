import React, {Component} from 'react';
import '../css/login.css'
import {Field, reduxForm} from "redux-form";
import {loginUser} from "../actions/index";
import {connect} from "react-redux";


const FIELDS = {username: "username", password: "password"};

class Login extends Component {
    renderInputComponent = field => {
        return (
            <div className="form-group mr-5">
                <label className="mr-5">{field.label}</label>
                <input {...field.input} type={field.type} className="form-control"/>
                <p className="text-danger">{field.meta.error}</p>
            </div>
        );
    };

    handleSubmit = user => {
        this.props.loginUser(user);
    };

    render() {
        return (
            <>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Portfolio Snoussi Youssef<br/> Login Page</h2>
                        <p>Login from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            {this.props.isAuth === 2 && <div className="alert alert-danger" role="alert">
                                Wrong email or password !!
                            </div>}
                            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <Field
                                        name={FIELDS.username}
                                        component={this.renderInputComponent}
                                        type="text"
                                        placeholder="User Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field
                                        name={FIELDS.password}
                                        component={this.renderInputComponent}
                                        type="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </div>
                                <button type="submit" className="btn btn-black">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const loginForm = reduxForm({
    form: "Login",
    fields: Object.keys(FIELDS)
})(Login);

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    };
};

const mapDispatchToProps = {
    loginUser
};


export default connect(mapStateToProps, mapDispatchToProps)(loginForm);