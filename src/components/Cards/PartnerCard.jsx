import React from "react";
import avatar from "../../assets/images/avatar.webp";
import editBtn from "../../assets/images/edit.png";
import deleteBtn from "../../assets/images/delete.png";
import { Card, Title, TwoButton } from "../../assets/style/cards";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePartner } from "../../redux/action/partner";

function PartnerCard({ id, name, phone, address, email }) {
  const dispatch = useDispatch();

  return (
    <Card height="300px" width="250px">
      <img width="50px" src={avatar} alt="" />
      <Title>name: {name}</Title>
      <Title>email: {email}</Title>
      <Title>phone: {phone}</Title>
      <Title>address: {address}</Title>
      <TwoButton>
        <Link to={`${id}`}>
          {" "}
          <img src={editBtn} alt="edit" />{" "}
        </Link>
        <img src={deleteBtn} alt="delete" onClick={()=>dispatch(deletePartner(id))}/>
      </TwoButton>
    </Card>
  );
}

export default PartnerCard;
