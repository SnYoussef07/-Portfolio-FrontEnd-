import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./containers/Home";
import DispatchAdmin from "./containers/DispatchAdmin";


export default class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/admin-snouss" component={DispatchAdmin}/>
                </Switch>
            </>
        );
    }
}
