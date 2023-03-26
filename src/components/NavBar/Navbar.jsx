import React from "react";
import { Content, Name, Login, TwoButton } from "../../assets/style/navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/user";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const user = useSelector((state) => state.userReducer.user);
  return (
    <Content>
      <Name>{user?.name}</Name>
      {user ? (
        <TwoButton>
        <Link to="/profile" className="text-decoration-none">
          <Login>Profile</Login>
        </Link>
        <Login
          onClick={() => {
            dispatch(logout());
            history("/");
          }}
        >
          Logout
        </Login>
      </TwoButton>
       
      ) : (
        <TwoButton>
          <Link to="/register" className="text-decoration-none">
            <Login>Register</Login>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <Login>Login</Login>
          </Link>
        </TwoButton>
      )}
    </Content>
  );
}

export default Navbar;
