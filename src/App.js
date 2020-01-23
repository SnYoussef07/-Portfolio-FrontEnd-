import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./containers/Home";


export default class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </>
        );
    }
}
