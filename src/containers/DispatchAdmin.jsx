import React, {Component} from 'react';
import {connect} from "react-redux";

import Login from "./Login";
import AdminPage from "./AdminPage";

class DispatchAdmin extends Component {
    render() {
        return (
            <>
                {this.props.isAuth === 0 && <Login/>}
                {this.props.isAuth === 1 && <AdminPage history={this.props.history}/>}
                {this.props.isAuth === 2 && <Login/>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    }
};

export default connect(mapStateToProps)(DispatchAdmin);
