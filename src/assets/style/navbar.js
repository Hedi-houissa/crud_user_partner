import styled from "styled-components";

export const Content = styled.div`
  background-color: #0d6efd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
`;
export const Name = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
export const Login = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  border: solid 1px #fff;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.553) 0px 0px 10px;
  }
`;

export const TwoButton = styled.div`
  display: flex;
  gap:10px;
  `
