import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #333333;
  border-radius: 0;
`;

const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #cccccc;
  font-size: 27px;
  font-weight: 400;
  &:hover {
    color: #eb4559;
  }
  &.active {
    color: #eb4559;
  }
`;

const AppleLogo = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 25px;
  margin-bottom: 4px;
`;

function Tab() {
  return (
    <Container>
      <NavLink exact to="/">
        <AppleLogo src="../Img/apple-logo.png" alt="apple-logo" />
      </NavLink>
      <LinkButton exact to="/">
        HOME
      </LinkButton>
      <LinkButton to="/profilepage">Profile</LinkButton>
      <LinkButton to="/contents">Contents</LinkButton>
    </Container>
  );
}

export default Tab;
