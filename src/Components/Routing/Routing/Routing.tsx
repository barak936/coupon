import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../log/login/login";
import LoginPanel from "../../log/loginPanel/loginPanel";
import Logout from "../../log/logout/logout";
import Main from "../../mainerea/Main/Main";
import Page404 from "../../notFound/page404/page404";

function Routing():JSX.Element{
return (
    <div className="Routing">
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Main} exact/>
            <Route path="/" component={Main} exact/>
            <Route path="/logout" component={Main} exact />
            <Redirect from="/" to="/home" exact/>
            <Route component={Page404}/>
        </Switch>
    </div>
);
}

export default Routing;

/*

*/