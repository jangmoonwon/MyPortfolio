import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <P>제가 만든 컴포넌트를 소개합니다.</P>
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
  font-weight: 600;
  color: #131313;
`;