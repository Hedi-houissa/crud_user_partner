import styled from "styled-components";

export const Content = styled.div`
  width: ${(props) => (props.open ? "200px" : "60px")};
  background-color: #0d6efd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  padding: ${(props) => (props.open ? "20px" : "20px 5px")};
`;
export const Title = styled.div`
  display: flex;
  gap:10px;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.open ? "160px" : "50px")};
  color: #fff;
  background-color: #0d6efd;
  padding: ${(props) => (props.open ? "5px 20px" : "5px")};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.553) 0px 0px 10px;
  }
`;
