import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Detaile() {
  return (
    <Container>
      <Contents>This is Detaile Pages.</Contents>
      <LinkButton to="/">홈으로 가기</LinkButton> {/*홈 아이콘으로 대체 예정*/}
    </Container>
  );
}

export default Detaile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Contents = styled.div`
font-size: 30px;
color: #ffffff;
`;

const LinkButton = styled(Link)`
  margin-top: 40vh;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #ff4757;
  }
`;
