import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AboutPage() {
  const subProjectName = "About";
  const projectName = "iProject 🆂";
  const description =
    "이 프로젝트는 TWMC-Components를 재활용해서 만들었습니다.";
  const twmcLink = "TWMC의 다양한 컴포넌트들을 만나보세요.";
  const homeButton = "홈으로 〉";
  return (
    <Container>
      <HeaderText style={{ color: "#ffdd59", fontSize: 33, marginTop: 13 }}>
        {subProjectName}
      </HeaderText>
      <HeaderText style={{ marginTop: -23 }}>{projectName}</HeaderText>
      <Text style={{ marginTop: 40, textDecoration: "none" }}>
        {description}
      </Text>
      <ImageContainer style={{ marginTop: 7 }}>
        <TwmcImage src={require('../assets/twmc-button.png')} alt="button" />
        <TwmcImage src={require('../assets/twmc-profile-image.png')} alt="profileImage" />
        <TwmcImage src={require('../assets/twmc-toggle-switch.png')} alt="toggleSwitch" />
        
      </ImageContainer>
      <a
        href="https://github.com/twmc-kor/twmc-react-components"
        style={{ textDecoration: "none" }}
      >
        <Text style={{ marginTop: 15, color: "#ffdd59" }}>
          {twmcLink}
        </Text>
      </a>
      <LinkButton to="/" style={{ marginTop: 45 }}>
        {homeButton}
      </LinkButton>
    </Container>
  );
}

export default AboutPage;

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
