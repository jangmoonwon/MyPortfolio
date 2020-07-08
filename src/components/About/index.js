import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About(props) {
  const { name } = props;
  return (
    <Container>
      <Content>
        <Text name="subHeader">About</Text>
        <Text name="mainHeader">iProject 🆂</Text>
      </Content>
      <Content>
        <Text>프로젝트 설명</Text>
        <Content name="imageGroup">
          <Img src="/Img/icon.png" alt="Profile" />
          <Img src="/Img/icon.png" alt="Profile" />
          <Img src="/Img/icon.png" alt="Profile" />
        </Content>
        <Text>TWMC 링크</Text>
      </Content>
      <LinkButton to="/">홈으로 가기 〉</LinkButton>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.name === "imageGroup" ? "row" : "column")};
  text-align: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: ${(props) => {
    if (props.name === "mainHeader") return "35px";
    if (props.name === "subHeader") return "22px";
  }};
  color: ${(props) => (props.name === "subHeader" ? "#fa1616" : "#fff")};
`;

const Img = styled.img`
width: 27vh;
height: 27vh;
border: 1px solid #fff;
margin: 15px;
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
