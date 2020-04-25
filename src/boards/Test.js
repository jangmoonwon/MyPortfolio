import React from "react";
import styled from "styled-components";

function TestBoard() {
  return (
    <Container>
      <Title>iProject Test</Title>
    </Container>
  );
}

export default TestBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f7;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
font-size: 45px;
font-weight: 700;
margin-bottom: 40vh;
`;