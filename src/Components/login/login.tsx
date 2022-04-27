import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import {Button, ButtonGroup, TextField, Typography} from "@material-ui/core";
import { ContactMail, VerifiedUserOutlined } from "@material-ui/icons";
import { Password } from "@mui/icons-material";

interface formable{
    userName:String;
    userPassword:String;
    role:String;
}

class Login extends Component {

    public render(): JSX.Element {
        const fieldDesign = {fontsize:40, margin:10};
        
        return (
            <div className="login BoxSolid">
                <Typography variant="h4" className="HeadLine"> Login Screen </Typography>
                <ContactMail> style={fieldDesign}</ContactMail>
                <TextField label="email" variant="outlined"/>
                    <br/>
                    <Password style={fieldDesign}/>
                <TextField type="password" label="password" variant="outlined"/>
                <br/><br/>
                <VerifiedUserOutlined style={fieldDesign}/>
                <TextField label="user type" variant="outlined"/>
                <br/><br/>
                <ButtonGroup variant="contained" fullWidth>
                    <Button type="submit" color="primary"> Send </Button>
                </ButtonGroup>
                <NavLink exact to="/login"> <b>Login</b> </NavLink>
            </div>
        );
    }
}

export default Login;
