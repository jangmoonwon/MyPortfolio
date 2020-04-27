import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function List({ match }) {
  return (
    <div>
      <LinkButton to={`${match.path}/a`}>A</LinkButton>
      <LinkButton to={`${match.path}/b`}>B</LinkButton>
    </div>
  );
}

export default List;


const LinkButton = styled(Link)`
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: red;
  font-size: 23px;
  font-weight: 300;
  &:hover {
    color: #ffffff;
  }
`;