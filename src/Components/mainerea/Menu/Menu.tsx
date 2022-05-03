import { Button } from "@material-ui/core";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";


class Menu extends Component {

    public render(): JSX.Element {
        return (
            <div className="Menu">
                <br/>
                
                    <NavLink exact to="/">
                        <Button variant="outlined" color="secondary">
                        Home
                        </Button>
                    </NavLink>
                
                <br/>
            </div>
        );
    }
}

export default Menu;
