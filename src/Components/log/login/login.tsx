import { Box, Card, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import LoginPanel from "../loginPanel/loginPanel";
import "./login.css";

function Login(): JSX.Element {
  const [value, setValue] = useState<string>("CUSTOMER");

  console.log(value);
  console.log("entered login");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <Card>
        {
        <Box sx={{ borderBottom: 1, borderStyle: "solid", padding: 2 }} >
          <Tabs onChange={handleChange} value={value} centered>
            <Tab label="Customer Login" value="CUSTOMER" />
            <Tab label="Company Login" value="COMPANY" />
            <Tab label="Administrator Login" value="ADMIN" />
          </Tabs>
          <br/><br/>
          <LoginPanel userType={value} />
          
        </Box>
      }
      
      </Card>
    </Container>
  );
}

export default Login;
