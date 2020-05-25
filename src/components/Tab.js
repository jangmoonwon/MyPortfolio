import React from "react";
import { Link } from "react-router-dom";
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
  height: 50px;
  width: ${({ width }) => TAB_WIDTH[width]};
  background-color: #333333;
  border-radius: ${({ variant }) => {
    if (variant === "square") return "0";
    if (variant === "rounded") return "10px";
  }};
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
  &:active {
    color: red;
  }
`;

const Img = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 25px;
  margin-bottom: 6px;
`;

function Tab(props) {
  const { width = "normal", variant = "square" } = props;
  return (
    <Container width={width} variant={variant}>
      <Img src="/img/Logo.png" id="Logo" />
      <LinkButton to="/" >HOME</LinkButton>
      <LinkButton to="/profile" >Profile</LinkButton>
      <LinkButton to="/contents" >Contents</LinkButton>
    </Container>
  );
}

export default Tab;

Tab.propTypes = {
  width: PropTypes.oneOf(["small, normal"]),
  variant: PropTypes.oneOf(["square", "rounded"]),
};
