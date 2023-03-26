import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width || "250px"};
  height: ${(props) => props.height || "150px"};
  box-shadow: rgba(13, 163, 193, 0.553) 0px 5px 10px;
`;
export const TwoButton = styled.div`
  display: flex;
  padding: 5px 5%;
  justify-content: space-between;
  align-items: center;
  width: 90%;
img {
    width:20px;
    &:hover {
      cursor: pointer;
      box-shadow: rgba(133, 163, 193, 0.553) 0px 0px 10px;
    }
  }
`;
export const Partner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 400px;
  box-shadow: rgba(13, 163, 193, 0.553) 0px 5px 10px;
`;
export const TitleList = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  width: 100%;
  text-align: center;
  color: #00dda0;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const Title = styled.div`
  display: flex;
  color: #00dda0;
  font-size: 16px;
  font-weight: 700;
`;
