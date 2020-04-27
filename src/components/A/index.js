import React from "react";
import styled from "styled-components";

function A() {
  return (
    <Container>
      <P>This is A Pages.</P>
    </Container>
  );
}

export default A;

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
