import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Tab from "./components/Tab";
import RootRouter from "./routes";

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: #fff;
	}
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled(Container)`
  flex-direction: column;
  background-color: #ffffff;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <ContentContainer>
          <Tab />
          <RootRouter />
          </ContentContainer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
