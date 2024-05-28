import styled from "styled-components";

export const LoadDate = styled.input`
  width: 800px;
  padding: 10px 15px;
  font-size: 18px;
  margin: 5px auto;
  border: none;
  border-radius: 10px;
`;

export const DateWrap = styled.div`
  margin: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
  margin-right: 30px;
`;

export const hoverColor = ['#4b9ed9', '#cc4242', '#b0b1b5'];

export const DetailBtn = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  background-color: ${props => props.$backgroundColor};
  border-radius: 10px;
  margin: 0px 5px;
  color: white;
  &:hover {
    background-color: ${props => props.$hoverColor};
  }
`;