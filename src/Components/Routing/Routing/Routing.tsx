import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "../../login/login";
import Logout from "../../logout/logout";
import Main from "../../mainerea/Main/Main";
import Page404 from "../../notFound/page404/page404";

function Routing():JSX.Element{
return (
    <div className="Routing">
<Switch>
<Route path="/home" component={Main} exact/>
<Route path="/" component={Main} exact/>
<Redirect from="/" to="/home" exact/>
<Route path="/login" component={Login} exact/>

<Redirect from="/logout" to="/home" exact/>
<Route component={Page404}/>
</Switch>
    </div>
);
}

export default Routing;