import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/Cards/UserCard";
import { Container, Div, TitleList } from "../../assets/style/cards";
import { getUsers } from "../../redux/action/user";

function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Div>
      <TitleList>List Users</TitleList>
      <Container>
        {users.map((user, i) => (
          <UserCard key={i} name={user.name} email={user.email} />
        ))}
      </Container>
    </Div>
  );
}

export default ListUsers;
