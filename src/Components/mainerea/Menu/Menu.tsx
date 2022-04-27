import { Component } from "react";
import "./Menu.css";


class Menu extends Component {

    public render(): JSX.Element {
        return (
            <div className="Menu">
                <br/>
                <a href="/home"> Home</a>
            </div>
        );
    }
}

export default Menu;
