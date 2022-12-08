import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import {Colors} from "../../styles/theme";
import styled from "@emotion/styled";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  role: yup.string().required("required"),
  bio: yup.string().required("required"),
  avatar: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  role: "",
  bio: "",
  avatar: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          body: formData,
        }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
      );
      // navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
      <Formik
          onSubmit={handleFormSubmit}
          initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
          validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
            <form onSubmit={handleSubmit}>
              <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
              >
                {isRegister && (
                    <>
                      <TextField
                          label="First Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={
                            Boolean(touched.firstName) && Boolean(errors.firstName)
                          }
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                          label="Last Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                          label="Location"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.location}
                          name="location"
                          error={Boolean(touched.location) && Boolean(errors.location)}
                          helperText={touched.location && errors.location}
                          sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                          label="Role"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.role}
                          name="role"
                          error={
                            Boolean(touched.role) && Boolean(errors.role)
                          }
                          helperText={touched.role && errors.role}
                          sx={{ gridColumn: "span 4" }}
                      />

                      <Box
                          gridColumn="span 4"
                          border={`1px solid ${Colors.light_gray}`}
                          borderRadius="5px"
                          p="1rem"
                      >
                        <Dropzone
                            acceptedFiles=".jpg,.jpeg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) =>
                                setFieldValue("picture", acceptedFiles[0])
                            }
                        >
                          {({ getRootProps, getInputProps }) => (
                              <Box
                                  {...getRootProps()}
                                  border={`2px dashed ${Colors.light_gray}`}
                                  p="1rem"
                                  sx={{ "&:hover": { cursor: "pointer" } }}
                              >
                                <input {...getInputProps()} />
                                {!values.picture ? (
                                    <p>Add Picture Here</p>
                                ) : (
                                    <FlexBetween>
                                      <Typography>{values.picture.name}</Typography>
                                      <EditOutlinedIcon />
                                    </FlexBetween>
                                )}
                              </Box>
                          )}
                        </Dropzone>
                      </Box>
                    </>
                )}

                <TextField
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    label="Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={Boolean(touched.password) && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    label="Bio"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.bio}
                    name="bio"
                    error={
                      Boolean(touched.bio) && Boolean(errors.bio)
                    }
                    helperText={touched.bio && errors.bio}
                    sx={{ gridColumn: "span 4" }}
                />
              </Box>

              {/* BUTTONS */}
              <Box>
                <Button
                    fullWidth
                    type="submit"
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                      backgroundColor: Colors.primary,
                      color: Colors.dim_grey,
                      "&:hover": { color: Colors.dove_gray },
                    }}
                >
                  {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                <Typography
                    onClick={() => {
                      setPageType(isLogin ? "register" : "login");
                      resetForm();
                    }}
                    sx={{
                      textDecoration: "underline",
                      color: Colors.dim_grey,
                      "&:hover": {
                        cursor: "pointer",
                        color: Colors.dove_gray,
                      },
                    }}
                >
                  {isLogin
                      ? "Don't have an account? Sign Up here."
                      : "Already have an account? Login here."}
                </Typography>
              </Box>
            </form>
        )}
      </Formik>
  );
};

export default Form;