import React, { useState } from "react";
import { Content, Title } from "../../assets/style/sidebar";
import usersImg from "../../assets/images/users.png";
import menu from "../../assets/images/menu.png";
import partnerImg from "../../assets/images/partners.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <Content open={open}>
      <Link to="/" className="text-decoration-none">
        <Title open={open} onClick={() => setOpen(!open)}>
          {open ? "Home" : <img width="30px" src={menu} alt="" />}
        </Title>
      </Link>

      {user && (
        <>
          <Link to="/users" className="text-decoration-none">
            <Title open={open}>
              {open ? "List users" : <img width="30px" src={usersImg} alt="" />}
            </Title>
          </Link>
          <Link to="/partners" className="text-decoration-none">
            <Title open={open}>
              {open ? (
                "List partner"
              ) : (
                <img width="30px" src={partnerImg} alt="" />
              )}
            </Title>
          </Link>
        </>
      )}
    </Content>
  );
}

export default SideBar;
