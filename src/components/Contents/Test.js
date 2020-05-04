import React from "react";
import styled from "styled-components";

function Test() {
  return (
    <Container>
      <P>This is TEST Pages.</P>
    </Container>
  );
}

export default Test;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const P = styled.div`
  font-size: 50px;
  color: #131313;
`;
