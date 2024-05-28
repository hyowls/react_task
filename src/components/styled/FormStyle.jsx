import styled from "styled-components";

export const FormLayout = styled.form`
width:900px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
padding: 20px;
`
export const Input = styled.input`
width:150px;
height:30px;
border:none;
border-radius:15px;
background-color:white;
padding:5px 15px;
`
export const SaveBtn = styled.button`
width:70px;
height:40px;
border:none;
border-radius:15px;
background-color:#A0DEFF;
&:hover{
  background-color:#5AB2FF;
}
`