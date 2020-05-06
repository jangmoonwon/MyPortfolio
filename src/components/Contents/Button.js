import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Container>
      <Title>Button</Title>
      <ContentContainer>
        <P>현재 사용중인 버튼</P>
        <BtnContainer>
          <LinkButton>더 알아보기 〉</LinkButton>
          <LinkButton>홈으로 가기</LinkButton>
        </BtnContainer>
        <P>Ver.1 버튼</P>
        <BtnContainer>
          <LinkButton>더 알아보기 〉</LinkButton>
          <LinkButton>홈으로 가기</LinkButton>
        </BtnContainer>
        <P>Ver.2 버튼</P>
        <BtnContainer>
          <LinkButton>더 알아보기 〉</LinkButton>
          <LinkButton>홈으로 가기</LinkButton>
        </BtnContainer>
      </ContentContainer>
    </Container>
  );
}

export default Button;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #f9f9fa;
  border: 2px solid #f9f9fa;
  border-radius: 4.5px;
  width: 95%;
  height: 100vh;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #131313;
  margin-bottom: auto;
  padding: 40px;
`;
const P = styled.p`
  margin: auto;
  font-size: 35px;
  width: 40%;
  color: #131313;
`;

const LinkButton = styled(Link)`
margin: 40px;
  text-decoration: none;
  font-size: 25px;
  color: #131313;
  &:hover {
    color: #536dfe;
  }
`;
