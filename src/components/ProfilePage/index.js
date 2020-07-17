import React, { useState } from "react";
import styled from "styled-components";

const WhiteHeart = () => (
  <Icon src={require("../assets/heart.png")} alt="whiteheart" />
);
const RedHeart = () => (
  <Icon src={require("../assets/red-heart.png")} alt="redheart" />
);

function Profile() {
  const [state, setState] = useState(false);
  const name = "JANG MOON WON";
  const description = [
    "안녕하세요.",
    <br />,
    "개발꿈나무🌱 신입개발자 장문원입니다.",
    <br />,
    "무럭무럭 성장중이며,",
    <br />,
    "더 큰 꿈나무🌳를 바라보며,",
    <br />,
    "나아가고 싶은 큰 포부가 있습니다!",
  ];
  return (
    <Container>
      <ProfileImage src={require("../assets/moonwon.jpg")} alt="Profile" />
      <NameContent>{name}</NameContent>
      <DescContent>{description}</DescContent>
      <LinkContainer>
        <a href="https://velog.io/@jangmoonwon">
          <LinkButton>GITHUB</LinkButton>
        </a>
        <IconButton
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? <RedHeart /> : <WhiteHeart />}
        </IconButton>
        <a href="https://github.com/jangmoonwon">
          <LinkButton>VELOG</LinkButton>
        </a>
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

const NameContent = styled.div`
  margin: 17px 0 0 20px;
  font-size: 40px;
  font-weight: 600;
  color: #f69e7b;
`;

const DescContent = styled.div`
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

const LinkButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 27px;
  font-weight: 700;
  color: #f69e7b;
  text-decoration: underline;
  &:hover {
    background-color: #808080;
    border-radius: 4.5px;
    cursor: pointer;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
