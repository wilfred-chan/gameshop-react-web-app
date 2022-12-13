import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment, Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import RegisterPage from "../register";
import axios from "axios";
import { useUIContext } from "../../context/ui";

const BASE_URL = "https://gameshop.herokuapp.com/api/";

const LoginForm = () => {
  const {user, setUser} = useUIContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const handleEmailChange = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(BASE_URL + 'login', {...values});
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div>
        <Container maxWidth="sm">
          <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              style={{ minHeight: "50vh" }}
          >
            <Paper elelvation={2} sx={{ padding: 5 }}>
              <form>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                        type="email"
                        fullWidth
                        label="Enter your email"
                        placeholder="Email Address"
                        variant="outlined"
                        value={values.email} onChange={handleEmailChange}
                        required
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                        type={values.showPass ? "text" : "password"}
                        fullWidth
                        label="Password"
                        placeholder="Password"
                        variant="outlined"
                        required
                        InputProps={{
                          endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                    onClick={handlePassVisibilty}
                                    aria-label="toggle password"
                                    edge="end"
                                >
                                  {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                              </InputAdornment>
                          ),
                        }}
                        value={values.password} onChange={handlePasswordChange}
                    />
                  </Grid>

                  <Grid item>
                    <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}>
                      Sign In
                    </Button>
                  </Grid>
                  {/* <Grid item>
                    <Typography sx={{ lineHeight: 2 }} variant="body1">
                      Don't have an account? <Link component={RegisterPage}>Register</Link>
                    </Typography>
                  </Grid> */}
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Container>
      </div>
  );
};

export default LoginForm;