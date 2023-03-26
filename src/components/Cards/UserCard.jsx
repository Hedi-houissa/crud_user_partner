import React from 'react'
import avatar from "../../assets/images/avatar.webp";
import { Card,Title } from '../../assets/style/cards';

function UserCard({name,email}) {
  return (
    <Card>
      <img width='50px' src={avatar} alt=''/>
      <Title>name: {name}</Title>
      <Title>email: {email}</Title>
    </Card>
  )
}

export default UserCard