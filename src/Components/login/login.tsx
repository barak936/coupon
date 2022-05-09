import { Component, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.css";
import {Button, ButtonGroup, TextField, Typography} from "@material-ui/core";
import { ContactMail, VerifiedUserOutlined  } from "@material-ui/icons";
import { Password } from "@mui/icons-material";
import axios from "axios";
import store from "../../redux/store";
import notify from "../../Utils/Notify";
import {useForm, SubmitHandler} from "react-hook-form";

interface formable{
    clientType:String;
    userName:String;
    userPass:String;
}

function Login(): JSX.Element {
    const fieldDesign = {fontSize:40, margin:10};
    const {register,handleSubmit,formState:{errors}} = useForm<formable>();
    const [jwt,setJWT] = useState("no token");
    const history = useHistory();
    

    const onSubmit:SubmitHandler<formable> = (data) => {
        const url = "http://localhost:8080/administrator/Login";
        //production
        //const url = "/login"
        console.log(data);
        
        axios
        .post(url,data)
        .then(res=>{
            //console.log("res:",res);
            
            if (res.data.length<3){
                notify.error("Bad login");
                return;
            }
            history.push("/");
            console.log(res.data);
            //store.dispatch(userUpdateAction(res.data));  
            //store.getState().authState.jwt=res.data;         
            setJWT(store.getState().authState.jwt);
        })
        .catch(error=>{
            console.log("Barak the king");
            console.log(error);
            //console.log(error.response.status);
            //notify.error(error.response.data.description);
            
            //console.log(error);
        });
        
    };

    return (
        <div className="login BoxSolid">
			<Typography variant="h4" id="HeadLine">Login Screen</Typography><hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <VerifiedUserOutlined color="error" style={fieldDesign}/>
                <TextField placeholder="customer? company?" label="user type" variant="outlined" {...register("clientType",{required:true})}/>
                <br/><br/>
                <ContactMail color="error" style={fieldDesign}/>
                <TextField placeholder="yourEmail@m.com" label="email" variant="outlined" {...register("userName",{required:true})}/>
                <br/>
                <div >{errors.userName && "You must give user email"}</div>
                <br/><br/>
                <Password color="error" style={fieldDesign}/>
                <TextField placeholder="remember it" type="password" label="password" variant="outlined" {...register("userPass",{required:true})}/>
                <br/><br/>
                <ButtonGroup variant="contained" fullWidth>
             
                    <Button type="submit" color="primary"> Sign In</Button>
                </ButtonGroup>
                <br/>
                JWT TOKEN:{jwt}
            </form>
        </div>
    );
}

export default Login;