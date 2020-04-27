import React from "react";
import styled from "styled-components";

function Error() {
  return (
    <Container>
      <P>찾을 수 없는 페이지입니다.</P>
    </Container>
  );
}

export default Error;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const P = styled.p`
  font-size: 30px;
  color: #ffffff;
`;
