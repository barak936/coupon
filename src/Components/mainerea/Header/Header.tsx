import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


class Header extends Component {

    public render(): JSX.Element {
        return (
         
            
            <div className="Header"> 
            
				<h1>okCoupon!!!</h1>
                <div id="loginn">
                <NavLink exact to="/login" id="login"> 
                <Button variant="contained" color="primary" >
                    LOGIN
                </Button> 
                </NavLink>    &nbsp;
                <NavLink exact to="/logout" >
                    <Button variant="contained" color="secondary">
                    LOGOUT 
                    </Button> 
                </NavLink>
                </div>
              
            </div>
            
        );
    }
}

export default Header;
