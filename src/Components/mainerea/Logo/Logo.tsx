import { Component } from "react";
import "./Logo.css";
import logoimage from "../../../Assets/logo.jpg"


class Logo extends Component {

    public render(): JSX.Element {
        return (
            <div className="Logo">
				
                <img src ={logoimage} />


            </div>
        );
    }
}

export default Logo;
