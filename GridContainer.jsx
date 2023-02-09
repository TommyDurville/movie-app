"use client"

import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  padding-top: 2rem;
  grid-template-columns:  repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  max-width: 100vw;
  text-align: center;
  justify-items: center;

  `;

  export default GridContainer;
