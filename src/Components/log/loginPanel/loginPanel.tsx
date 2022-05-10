import { Component } from "react";
import "./loginPanel.css";
import { useActions } from "../../../hooks/useActions";
import { actionCreator } from "../../../state";
import { tryAdminLogin, tryCompanyLogin, tryCustomerLogin, tryLogout } from "../../../state/actionCreator";
import { useForm } from "react-hook-form";
import { PropaneSharp } from "@mui/icons-material";
import{useTypedSelector} from "../../../hooks/useTypeSelector"
import { NavLink } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@material-ui/core";

interface LoginProps {
    children?: JSX.Element;
    userType: string;
  }

  function LoginPanel(props: LoginProps){
     // const {tryAdminLogin,tryCompanyLogin,tryLogout,tryCustomerLogin}=useActions();

  const {register, formState: { errors }, handleSubmit} = useForm();

  
  const onSubmit = (data: any) => {

    switch(props.userType){
        case "CUSTOMER":
            tryCustomerLogin(data.userName,data.userPass)

            break


            case "COMPANY":
                tryCustomerLogin(data.userName,data.userPass)

                break

                case "ADMIN":
                    tryCustomerLogin(data.userName,data.userPass)
                    
                    break

                    default:
                        tryLogout();

    }


  };

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography>{props.userType}</Typography>
          <TextField
            {...register("userEmail", { required: "this is required" })}
            label="Email"
            variant="standard"
          />
          {errors.userEmail && <p>{errors.userEmail.message}</p>}
          <br />
          <TextField
            {...register("userPass", {
              required: "this is required",
              minLength: { value: 4, message: "Min length is 4" },
            })}
            label="Password"
            variant="standard"
          />
          {errors.userPass && <p>{errors.userPass.message}</p>}
          <br/><br/>
          <Button type="submit">Login</Button>
        </form>
      </Box>
    </Container>
  );

}

  export default LoginPanel;
