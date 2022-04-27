import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Main from "../../mainerea/Main/Main";
import Page404 from "../../notFound/page404/page404";

function Routing():JSX.Element{
return (
    <div className="Routing">
<Switch>
<Route path="/home" component={Main} exact/>
<Route path="/" component={Main} exact/>
<Redirect from="/" to="/home" exact/>
<Route component={Page404} exact/>
</Switch>
    </div>
);
}

export default Routing;