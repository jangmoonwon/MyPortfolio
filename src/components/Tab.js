import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #333333;
`;

const LinkButton = styled(Link)`
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #cccccc;
  font-size: 25px;
  font-weight: 300;
  &:hover {
    color: #fff;
  }
`;

const Img = styled.img`
width: 23px;
height: 23px;
margin-left: 25px;
margin-bottom: 6px;
`;

function Tab() {
  return (
    <Container>
     <Img src="/img/Logo.png" id="Logo" />
      <LinkButton to="/">HOME</LinkButton>
      <LinkButton to="/profile">Profile</LinkButton>
      <LinkButton to="/contents">Contents</LinkButton>
    </Container>
  );
}

export default Tab;
