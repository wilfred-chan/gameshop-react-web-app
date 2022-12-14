import {
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment, Typography, Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import {Colors} from "../../styles/theme";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AvatarUpload from "./AvatarUpload";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/user";

const BASE_URL = "https://gameshop.herokuapp.com/api/";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "customer",
    location: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const result = await axios.post(BASE_URL + "register", values);
      console.log("Register success!");
      setUser({...result.data, loggedIn: true});
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <div>
        <Box maxWidth="sm" >
          <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="space-around"
              style={{ minHeight: "100vh", marginLeft: 0, marginTop: 10 }}
          >
            <Paper elelvation={2} sx={{ padding: 5 }}>
              <form>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                >
                  <TextField
                      label="First Name"
                      value={values.firstname}
                      name="firstname"
                      placeholder="First name"
                      required
                      sx={{ gridColumn: "span 2" }}
                      onChange={handleChange}
                  />
                  <TextField
                      label="Last Name"
                      value={values.lastname}
                      name="lastname"
                      placeholder="Last name"
                      required
                      sx={{ gridColumn: "span 2" }}
                      onChange={handleChange}
                  />
                  <TextField
                      label="Location"
                      value={values.loc}
                      name="location"
                      placeholder="Location"
                      sx={{ gridColumn: "span 4" }}
                      onChange={handleChange}
                  />
                  {/* <TextField
                      label="Role"
                      value={values.loc}
                      name="role"
                      placeholder="Role"
                      sx={{ gridColumn: "span 4" }}
                  /> */}
                  <Box
                      gridColumn="span 4"
                      border={`1px solid ${Colors.light_gray}`}
                      borderRadius="5px"
                      p="1rem"
                  >
                  {/*  <Dropzone*/}
                  {/*      acceptedFiles=".jpg,.jpeg,.png"*/}
                  {/*      multiple={false}*/}
                  {/*      onDrop={(acceptedFiles) =>*/}
                  {/*          setFieldValue("avatar", acceptedFiles[0])*/}
                  {/*      }*/}
                  {/*  >*/}
                  {/*    {({ getRootProps, getInputProps }) => (*/}
                  {/*        <Box*/}
                  {/*            {...getRootProps()}*/}
                  {/*            border={`2px dashed ${Colors.light_gray}`}*/}
                  {/*            p="1rem"*/}
                  {/*            sx={{ "&:hover": { cursor: "pointer" } }}*/}
                  {/*        >*/}
                  {/*          <input {...getInputProps()} />*/}
                  {/*          {!values.picture ? (*/}
                  {/*              <p>Add Picture Here</p>*/}
                  {/*          ) : (*/}
                  {/*              <FlexBetween>*/}
                  {/*                <Typography>{values.picture.name}</Typography>*/}
                  {/*                <EditOutlinedIcon />*/}
                  {/*              </FlexBetween>*/}
                  {/*          )}*/}
                  {/*        </Box>*/}
                  {/*    )}*/}
                  {/*  </Dropzone>*/}
                    <AvatarUpload />
                  </Box>
                  <TextField
                      label = "username"
                      fullWidth
                      value={values.username}
                      name = "username"
                      placeholder="Username"
                      sx={{ gridColumn: "span 4" }}
                      onChange={handleChange}
                      required
                  />
                  <TextField
                      label = "email"
                      type="email"
                      fullWidth
                      value={values.email}
                      name = "email"
                      placeholder="Email Address"
                      sx={{ gridColumn: "span 4" }}
                      onChange={handleChange}
                  />
                  <TextField
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      value={values.pass}
                      label="Password"
                      placeholder="Password"
                      name = "password"
                      variant="outlined"
                      required
                      sx={{ gridColumn: "span 4" }}
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
                      onChange={handleChange}
                  />
                  <Grid item>
                    <Typography sx={{ lineHeight: 2,}} variant="body1" >
                      Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                  </Grid>


                  <Grid item>
                    <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}>
                      Register
                    </Button>
                  </Grid>


        </Box>
              </form>
            </Paper>
          </Grid>
        </Box>

      </div>
  );
};

export default RegisterForm;