import React, {Component} from 'react';
import '../css/login.css'

class Login extends Component {
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
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
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

export default Login;