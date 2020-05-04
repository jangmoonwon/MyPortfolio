import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <P>This is Main Pages.</P>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
`;

const P = styled.div`
  font-size: 50px;
  color: #131313;
`;