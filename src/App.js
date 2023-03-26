import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/NavBar/Navbar";
import Login from "./pages/Login/Login";
import { Container, Content, Pages } from "./assets/style/app";
import ListUsers from "./pages/User/ListUsers";
import ListPartners from "./pages/Partner/ListPartners";
import { Routes, Route } from "react-router-dom";
import Errors from "./pages/Errors";
import AddEditPartner from "./pages/Partner/AddEditPartner";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "./redux/action/user";
import Profile from "./pages/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const token = localStorage.getItem("userAuth");
  useEffect(() => {
    !user && token && dispatch(profile(JSON.parse(token)));
  }, [user, token]);
  return (
    <Container>
      <SideBar />
      <Content>
        <Navbar />
        <Pages>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/users" element={<ListUsers />} />
            <Route exact path="/partners" element={<ListPartners />} />
            {["/partners/add", "/partners/:id"].map((path, i) => {
              return (
                <Route key={i} exact path={path} element={<AddEditPartner />} />
              );
            })}

            <Route path="/*" element={<Errors />} />
          </Routes>
        </Pages>
      </Content>
    </Container>
  );
}

export default App;
