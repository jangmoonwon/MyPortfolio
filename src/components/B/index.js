import React from "react";
import styled from "styled-components";

function B() {
  return (
    <Container>
      <P>This is B Pages.</P>
    </Container>
  );
}

export default B;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const P = styled.div`
  font-size: 50px;
  color: #ffffff;
`;