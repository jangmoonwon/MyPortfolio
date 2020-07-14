import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <ProfileImage src="/Img/moonwon.jpg" alt="Profile" />
      <NameText>JANG MOON WON</NameText>
      <InfoText>
        안녕하세요.
        <br />
        개발꿈나무🌱 신입개발자 장문원입니다.
        <br />
        무럭무럭 성장중이며,
        <br />
        더 큰 꿈나무🌳를 바라보며,
        <br />
        나아가고 싶은 큰 포부가 있습니다!
      </InfoText>
      <LinkContainer>
      <LinkButton href="https://velog.io/@jangmoonwon">GITHUB</LinkButton>
      <IconButton src="/Img/heart.png" alt="heart" />
      <LinkButton href="https://github.com/jangmoonwon">VELOG</LinkButton>
      </LinkContainer>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #4d4d4d;
  border-radius: 4.5px;
  width: 70vh;
  height: 85vh;
`;

const ProfileImage = styled.img`
  width: 70vh;
  height: 37vh;
  border-top-left-radius: 4.5px;
  border-top-right-radius: 4.5px;
`;

const NameText = styled.div`
  margin: 17px 0 0 20px;
  font-size: 40px;
  font-weight: 600;
  color: #f69e7b;
`;

const InfoText = styled.div`
  margin: 15px 0 0 20px;
  font-size: 30px;
  font-weight: 300;
  color: #fff;
`;

const LinkContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: auto;
width: 70vh;
height: 10vh;
`;

const LinkButton = styled.a`
font-size: 25px;
font-weight: 700;
color: #f69e7b;
text-decoration: underline;
`;

const IconButton = styled.img`
width: 40px;
height: 40px;
`;
