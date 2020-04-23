import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Title>iProject🅢</Title>
      <Main>
        노멀함.
        <br />
        그러나 특별함.
      </Main>
      <LinkButton to="/Detaile">더 알아보기 〉</LinkButton>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 35px;
  height: 20vh;
  margin-top: -15vh;
`;

const Main = styled.div`
  font-size: 70px;
  font-weight: 900;
  height: 20vh;
  margin-top: 15vh;
`;

const LinkButton = styled(Link)`
  margin-top: 15vh;
  text-decoration: none;
  font-size: 25px;
  color: #131313;
  &:hover {
    color: #ff4757
  }
`;
