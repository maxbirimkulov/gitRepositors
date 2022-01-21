import React from 'react';
import {Provider} from "react-redux";
import store from "../../redux";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../home/Home";
import Repos from "../Repos/Repos";
import Mark from "../mark/Mark";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/:userName' component={() => <Repos/>}/>
                    <Route exact path='/:userName/:reposName' component={() => <Mark/>}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;