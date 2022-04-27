import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./logout.css";

class Logout extends Component {

    public render(): JSX.Element {
        return (
            <div className="logout">
				<NavLink exact to="/logout"> <b>Logout</b> </NavLink>
            </div>
        );
    }
}

export default Logout;
