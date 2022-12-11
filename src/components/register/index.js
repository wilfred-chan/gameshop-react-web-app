import { Box, Typography, } from "@mui/material";
import {Colors} from "../../styles/theme";
import RegisterForm from "./form";

const RegisterPage = () => {

  return (
      <Box>
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
          <Typography fontWeight="500" variant="h5" sx={{ textAlign: "center" }}>
            Register
          </Typography>
          <RegisterForm />
        </Box>
      </Box>
  );
};

export default RegisterPage;