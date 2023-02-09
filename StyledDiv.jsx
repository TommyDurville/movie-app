"use client"

import styled from "styled-components";

const StyledDiv = styled.div`
border: 1px solid black;
height: 450px;
width: 300px;
margin: 1rem;
border-radius: 10px;


&:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 75px -15px red; 

}
`;

export default StyledDiv;

