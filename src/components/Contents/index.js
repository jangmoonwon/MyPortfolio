import React from "react";
import styled from "styled-components";
import{ Route } from "react-router-dom";
import List from "./List";

function Contents({match}) {
  return (
    <Container>
        <P>components Main Pages</P>
        <Route exact path={match.path} component={List}/>
        <Route path={`${match.path}/a`} component={}/>
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 30px;
  color: #ffffff;
`;

const LinkButton = styled(Link)`
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #cccccc;
  font-size: 23px;
  font-weight: 300;
  &:hover {
    color: #ffffff;
  }
`;