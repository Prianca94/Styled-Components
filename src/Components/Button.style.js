import styled from "styled-components";

export const Button=styled.button`
height:50px;
width:100px;
background-color:${(props)=>props.backgroundColor};

&:hover{
    background-color:white;
}
`;

