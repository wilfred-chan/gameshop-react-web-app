import { Box, Typography, } from "@mui/material";
import Form from "./form";
import {Colors} from "../../styles/theme";

const LoginPage = () => {

  return (
      <Box>
        <Box
            width="100%"
            backgroundColor={Colors.primary}
            p="1rem 6%"
            textAlign="center"
        >
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            Game shop
          </Typography>
        </Box>

        <Box
            width= "50%"
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={Colors.secondary}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Game Shop, the store for purchasing games!
          </Typography>
          <Form />
        </Box>
      </Box>
  );
};

export default LoginPage;