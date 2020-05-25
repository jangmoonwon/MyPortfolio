import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src="/Img/icon.png" alt="Profile" />
        <Info>안녕하세요. <br/>신입개발자 장문원입니다.</Info>
        <Url a href="https://github.com/jangmoonwon">Github 둘러보기 〉</Url>
        <Url a href="https://velog.io/@jangmoonwon">Velog 둘러보기 〉</Url>
      </ProfileContainer>
      <LinkButton to="/">홈으로 가기</LinkButton>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const LinkButton = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #536dfe;
    transition: 0.3s;
  }
  margin-top: 30px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131313;
  border: 4.5px solid #333333;
  border-radius: 4.5px;
  width: 65vh;
  height: 70vh;
`;

const ProfileImage = styled.img`
  margin-top: 50px;
  padding: 1px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #333333;
`;

const Info = styled.div`
margin-top: 15px;
font-size: 35px;
font-weight: 400;
color: #fff;
`;

const Url = styled.a`
margin-top: 20px;
font-size: 30px;
font-weight: 300;
color: #fff;
text-decoration: none;
&:hover {
    color: #536dfe;
    transition: 0.3s;
  }
`;