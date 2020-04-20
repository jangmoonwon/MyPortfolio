import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: #141414;
	}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Div =  styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: #000000;
color: #ffffff;
font-size: 30px;
width: 70%;
height: 10%;
margin: auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      
      <Div>This is TEST</Div>
    </Container>
  );
}

export default App;
