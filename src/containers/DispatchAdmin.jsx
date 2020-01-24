import React, {Component} from 'react';
import Login from "./Login";
import AdminPage from "./AdminPage";

class DispatchAdmin extends Component {
    render() {
        return (
            <>
                {/*<Login/>*/}
                <AdminPage/>
            </>
        );
    }
}

export default DispatchAdmin;