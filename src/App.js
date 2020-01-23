import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./containers/Home";


export default class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}
