import { Box, Typography, } from "@mui/material";
import {Colors} from "../../styles/theme";
import LoginForm from "./form";
import {Link} from "react-router-dom";
import React from "react";

const LoginPage = () => {

  return (
      <Box>
          <Box>
              <header>
                  <Link to="/"><button className="btn btn-secondary">Back to Home</button></Link>
              </header>
          </Box>
        <Box
            width="100%"
            backgroundColor={Colors.primary}
            p="1rem 6%"
            textAlign="center"
        >
          <Typography fontWeight="bold" fontSize="32px" color={Colors.white}>
            Game shop
          </Typography>
        </Box>

        <Box
            width= "50%"
            p="1rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={Colors.secondary}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Game Shop, the store for purchasing games!
          </Typography>
          <LoginForm />
        </Box>
      </Box>
  );
};

export default LoginPage;