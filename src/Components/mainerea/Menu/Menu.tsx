import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";


class Menu extends Component {

    public render(): JSX.Element {
        return (
            <div className="Menu">
                <br/>
                <NavLink exact to="/"> Home </NavLink>
                <br/>
            </div>
        );
    }
}

export default Menu;
