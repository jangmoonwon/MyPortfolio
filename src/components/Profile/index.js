import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container>
      <Contents>
      포트폴리오 소개 <br/>
      <br/>
      프로필 소개
      </Contents>
      <LinkButton to="/">홈으로 가기</LinkButton> 
    </Container>
  );
}

export default Profile;

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
  font-size: 25px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #536DFE;;
  }
`;
