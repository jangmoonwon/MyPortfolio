import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const TAB_WIDTH = {
  small: "75vh",
  normal: "100%",
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: ${({ width }) => TAB_WIDTH[width]};
  background-color: #333333;
  border-radius: ${({ variant }) => {
    if (variant === "square") return "0";
    if (variant === "rounded") return "10px";
  }};
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

const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-left: 25px;
  margin-bottom: 4px;
`;

function Tab(props) {
  const { width = "normal", variant = "square" } = props;
  return (
    <Container width={width} variant={variant}>
      <NavLink to="/">
        <Img src="/img/Logo.png" id="Logo" />
      </NavLink>
      <LinkButton exact to="/">
        HOME
      </LinkButton>
      <LinkButton to="/profile">Profile</LinkButton>
      <LinkButton to="/contents">Contents</LinkButton>
    </Container>
  );
}

export default Tab;

Tab.propTypes = {
  width: PropTypes.oneOf(["small, normal"]),
  variant: PropTypes.oneOf(["square", "rounded"]),
};
