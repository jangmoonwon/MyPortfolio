import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  const projectName = "iProject 🆂";
  const title = ["노멀함.", <br />, "그러나 특별함."];
  const aboutButton = "더 알아보기 〉";
  return (
    <Container>
      <HeaderText>{projectName}</HeaderText>
      <MainText efc>{title}</MainText>
      <LinkButton to="/about">{aboutButton}</LinkButton>
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

const HeaderText = styled.div`
  font-size: 35px;
  height: 20vh;
  margin-top: -13vh;
  color: #ffffff;
`;

const MainText = styled.div`
  display: inline-block;
  font-size: 70px;
  font-weight: 900;
  height: 20vh;
  margin-top: 15vh;
  color: #fff;
  background: linear-gradient(to right, #dd5e89 20%, #e55d87 30%, #f7bb97 50%);
  ${(props) =>
    props.efc &&
    css`
      animation: ${TextEffect} 2s linear infinite;
    `};
  background-size: auto;
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LinkButton = styled(Link)`
  margin-top: 15vh;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  &:hover {
    color: #536dfe;
    transition: 0.3s;
  }
`;

const TextEffect = keyframes`
0% {
		background-position: 10% center;
	}
30% {
  background-position: 30% center;
}

70% {
  background-position: 70% center;
}

100% {
  background-position: 10% center;
}
`;
