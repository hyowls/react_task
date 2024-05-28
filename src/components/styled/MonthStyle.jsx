import styled from "styled-components";

export const MonthLayout = styled.div`
width:900px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
margin-top:30px;
padding:20px;
`
export const MonthBtn = styled.button`
width: 110px;
height: 70px;
background-color: ${props => (props.selected ? '#58A399' : 'white')};
color: ${props => (props.selected ? 'white' : 'black')};
border-radius: 15px;
border: none;
margin: 15px;
cursor: pointer;
&:hover {
  background-color: ${props => (props.selected ? '#46847b' : '#f0f0f0')};
}
`