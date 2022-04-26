import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../../mainerea/Main/Main";

function Routing():JSX.Element{
return (
    <div className="Routing">
<Routes>
<Route path="/home">
    <Main/>
</Route>
</Routes>
    </div>
);
}

export default Routing;