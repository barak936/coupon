import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


class Header extends Component {

    public render(): JSX.Element {
        return (
         
            
            <div className="Header"> 
            
				<h1>okCoupon!!!</h1>

                <NavLink exact to="/login" className="login" text-align="right"> LOGIN </NavLink>  &nbsp;&nbsp;&nbsp;
                
                
                <NavLink exact to="/logout" text-align="right"> LOGOUT </NavLink>

            </div>
            
        );
    }
}

export default Header;
