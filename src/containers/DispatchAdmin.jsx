import React, {Component} from 'react';
import {connect} from "react-redux";

import Login from "./Login";
import AdminPage from "./AdminPage";

class DispatchAdmin extends Component {
    render() {
        return (
            <>
                {/*{this.props.isAuth === 0 && <Login/>}*/}
                {/*{this.props.isAuth === 1 && <AdminPage/>}*/}
                {/*{this.props.isAuth === 2 && <Login/>}*/}

                <AdminPage/>
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