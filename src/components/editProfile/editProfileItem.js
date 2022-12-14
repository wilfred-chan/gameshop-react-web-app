import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/user';
import { Link, useNavigate } from 'react-router-dom';

const divStyle = {
  width: 100,
};

const BASE_URL = 'https://gameshop.herokuapp.com/api/users/';

const EditProfileItem = ({ profile }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [values, setValues] = useState(user);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: values.firstname,
      lastname: values.lastname,
      bio: values.bio,
      location: values.location,
    };
    axios
      .put(BASE_URL + user.username, data)
      .then((res) => {
        console.log('User Profile Updated');
        setUser({ ...user, ...data });
        navigate('/profile');
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.message);
      });
  };

  return (
    <>
      <form className="pt-5 form-width" onSubmit={handleSubmit}>
        <div>
          <span>First Name</span>
          <input
            className="form-control"
            required
            name="firstname"
            type="text"
            value={values.firstname}
            onChange={handleChange}
          />
          <span>Last Name</span>
          <input
            className="form-control"
            required
            name="lastname"
            type="text"
            value={values.lastname}
            onChange={handleChange}
          />
        </div>

        <div>
          <span>Bio</span>
          <input
            className="form-control"
            type="text"
            name="bio"
            value={values.bio}
            onChange={handleChange}
          />
        </div>

        <div>
          <span>Location</span>
          <input
            type="text"
            className="form-control"
            name="location"
            value={values.location}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto" style={divStyle}>
          <button
            className="btn btn-secondary mt-3"
            type="submit"
            value="Submit"
            style={divStyle}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default EditProfileItem;
