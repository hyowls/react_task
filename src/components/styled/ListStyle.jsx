import styled from "styled-components";

export const ListLayout = styled.div`
width:900px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
padding:20px;
margin-top:30px;
`
export const Item = styled.div`
width:800px;
background-color:white;
padding:20px;
border-radius:15px;
margin:10px 0;
&:hover{
  transform:scale(1.02);
  transition:all 0.3s;
}
`
export const DateText = styled.p`
margin-bottom:10px;
`
export const Title = styled.span`
  font-size:22px;
`
export const Content = styled.p`
width:550px;
font-size:22px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
`
export const Price = styled.span`
font-size:22px;
float:right
`
export const DescFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
export const FlexLayout = styled.div`
  display:flex;
  flex-direction:row;
`