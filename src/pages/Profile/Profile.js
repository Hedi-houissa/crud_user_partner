import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container, Errors, Section, Title } from "../../assets/style/form";
import { useDispatch, useSelector } from "react-redux";
import { profile, updateUser } from "../../redux/action/user";
import { useNavigate } from "react-router-dom";

function Profile() {
  const token = localStorage.getItem("userAuth");

  const dispatch = useDispatch();
  const history = useNavigate();
  
  const user = useSelector((state) => state.userReducer.user);
  const [initUser, setinitUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const formik = useFormik({
    initialValues: initUser,
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(updateUser(values,JSON.parse(token)));
      history("/");
    },
  });

  useEffect(() => {
    !user && dispatch(profile(JSON.parse(token)));
  }, [user]);

  useEffect(() => {
    user?.name&&setinitUser({...user,password: ""})
  }, [user?.name]);

  useEffect(() => {
    initUser?.name && formik.setValues(initUser);
  }, [initUser]);

  return (
    <Container>
      <Title>Profile</Title>

      <form onSubmit={formik.handleSubmit}>
        <Section>
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Errors>{formik.errors.name}</Errors>
          ) : null}
        </Section>
        <Section>
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Errors>{formik.errors.email}</Errors>
          ) : null}
        </Section>
        <Section>
          <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Errors>{formik.errors.password}</Errors>
          ) : null}
        </Section>

        <button type="submit">Send</button>
      </form>
    </Container>
  );
}

export default Profile;
