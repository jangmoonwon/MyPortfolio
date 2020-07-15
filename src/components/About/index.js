import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <Container>
      <HeaderText style={{ color: "#ffdd59", fontSize: 33, marginTop: 13 }}>
        About
      </HeaderText>
      <HeaderText style={{ marginTop: -23 }}>iProject 🆂</HeaderText>
      <Text style={{ marginTop: 40, textDecoration: "none" }}>
        이 프로젝트는 TWMC-Components를 재활용해서 만들었습니다.
      </Text>
      <ImageContainer style={{ marginTop: 7 }}>
        <TwmcImage src="/Img/twmc-button.png" alt="button" />
        <TwmcImage src="/Img/twmc-toggle-switch.png" alt="button" />
        <TwmcImage src="/Img/twmc-profile-image.png" alt="button" />
      </ImageContainer>
      <a
        href="https://github.com/twmc-kor/twmc-react-components"
        style={{ textDecoration: "none" }}
      >
        <Text style={{ marginTop: 15, color: "#ffdd59" }}>
          TWMC의 다양한 컴포넌트들을 만나보세요.
        </Text>
      </a>
      <LinkButton to="/" style={{ marginTop: 45 }}>
        홈으로 〉
      </LinkButton>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderText = styled.div`
  font-size: 45px;
  color: #ffffff;
  text-align: center;
`;

const Text = styled.div`
  font-size: 30px;
  color: #fff;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const TwmcImage = styled.img`
  width: 420px;
  height: 320px;
  border-radius: 7px;
  margin: 7px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  &:hover {
    color: #536dfe;
    transition: 0.3s;
  }
`;
