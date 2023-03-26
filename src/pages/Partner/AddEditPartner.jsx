import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container, Errors, Section, Title } from "../../assets/style/form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addPartner,
  getPartner,
  updatePartner,
} from "../../redux/action/partner";

function AddEditPartner() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const params = useParams();
  const partner = useSelector((state) => state.partnerReducer.partner);
  const msg = useSelector((state) => state.partnerReducer.msg);
  const [initPartner, setinitPartner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const formik = useFormik({
    initialValues: initPartner,
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
    }),
    onSubmit: (values) => {
      params?.id
        ? dispatch(updatePartner(params?.id, values))
        : dispatch(addPartner(values));
    },
  });
  useEffect(() => {
    msg === "succ" && history("/partners");
  }, [msg]);

  useEffect(() => {
    params?.id && dispatch(getPartner(params?.id));
  }, [params]);
  useEffect(() => {
    partner?.name&&setinitPartner(partner);
  }, [partner?.name]);
  useEffect(() => {
    initPartner?.name && formik.setValues(initPartner);
  }, [initPartner]);
  return (
    <Container>
      <Title>Partner</Title>
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
          <label>Phone:</label>
          <input
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Errors>{formik.errors.phone}</Errors>
          ) : null}
        </Section>
        <Section>
          <label>Address:</label>
          <input
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <Errors>{formik.errors.address}</Errors>
          ) : null}
        </Section>

        <button type="submit">Send</button>
      </form>
    </Container>
  );
}

export default AddEditPartner;
