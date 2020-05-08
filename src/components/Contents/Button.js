import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Button(props) {
  const { id } = props;
  return (
    <Container>
      <Title>Button.</Title>
      <ContentContainer>
        <P>현재 사용중인 버튼</P>
        <BtnContainer>
          <LinkButton id="type-A">더 알아보기 〉</LinkButton>
          <LinkButton id="type-A">홈으로 가기</LinkButton>
        </BtnContainer>
        <P>Ver.1 버튼</P>
        <BtnContainer>
          <LinkButton id="type-B-1">더 알아보기 〉</LinkButton>
          <LinkButton id="type-B-2">홈으로 가기</LinkButton>
        </BtnContainer>
        <P>Ver.2 버튼</P>
        <BtnContainer>
          <LinkButton id="type-C">
            더 알아보기 <Img src="/img/Arrow.png" id="Arrow" />
          </LinkButton>
          <LinkButton id="type-C">
            홈으로 가기 <Img src="/img/Logo.png" id="Logo" />
          </LinkButton>
        </BtnContainer>
      </ContentContainer>
    </Container>
  );
}

export default Button;

const Img = styled.img`
  width: ${(props) => {
    if (props.id === "Arrow") return "19px";
    if (props.id === "Logo") return "21px";
  }};
  height: ${(props) => {
    if (props.id === "Arrow") return "18px";
    if (props.id === "Logo") return "21px";
  }};
  color: red;
`;

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
  font-size: 70px;
  font-weight: 900;
  color: #131313;
  margin-bottom: auto;
  padding: 40px;
  background: linear-gradient(to right, #000000, #fd746c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const P = styled.p`
  margin: auto;
  font-size: 35px;
  width: 40%;
  font-weight: 600;
  color: #131313;
`;

const LinkButton = styled(Link)`
  margin: 40px;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 25px;
  color: ${(props) => {
    if (props.id === "type-A") return "#131313";
    if (props.id === "type-B-1") return "#6855e0";
    if (props.id === "type-B-2") return "#fff";
    if (props.id === "type-C") return "#fff";
  }};
  background-color: ${(props) => {
    if (props.id === "type-B-2") return "#6855e0";
    if (props.id === "type-C") return "#1e90ff";
  }};
  &:hover {
    color: ${(props) => {
      if (props.id === "type-A") return "#536dfe";
      if (props.id === "type-B-1") return "#fff";
      if (props.id === "type-B-2") return "#6855e0";
    }};
    background-color: ${(props) => {
      if (props.id === "type-B-1") return "#6855e0";
      if (props.id === "type-B-2") return "#fff";
    }};
   
  }
  border: ${(props) => {
    if (props.id === "type-A") return "0";
    if (props.id === "type-B-1" || props.id === "type-B-2")
      return "2px solid #6855e0";
  }};
  border-radius: ${(props) => {
    if (props.id === "type-B-1" || props.id === "type-B-2") return "4.5px";
    if (props.id === "type-C") return "50px";
  }};
  box-shadow: ${(props) => {
    if (props.id === "type-B-1" || props.id === "type-B-2")
      return "0 0 20px rgba(104, 85, 224, 0.4);";
  }};
  transition: 0.3s;
  
`;
