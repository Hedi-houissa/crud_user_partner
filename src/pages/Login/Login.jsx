import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container, Errors, Section, Title } from "../../assets/style/form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const token = useSelector((state) => state.userReducer.token);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  useEffect(() => {
    token && history("/");
  }, [token]);
  return (
    <Container>
      <Title>Login</Title>

      <form onSubmit={formik.handleSubmit}>
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
};

export default Login;
