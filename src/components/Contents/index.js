import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "../Contents/Main";
import Button from "../Contents/Button";
import Navbar from "../Contents/Navbar";
import Test from "../Contents/Test";

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SubTabConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fa;
  width: 1440px;
  height: 7vh;
`;
const ContentConatiner = styled.div`
  background-color: #ffffff;
  color: #131313;
  width: 100%;
  height: 88vh;
`;

const LinkButton = styled(Link)`
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #131313;
  font-size: 25px;
  font-weight: 300;
  &:hover {
    color: #e91e63;
  }
`;

function Contents({ match }) {
  return (
    <Container>
      <SubTabConatiner>
        <LinkButton to={`${match.path}/test`}>TEST</LinkButton>
        <LinkButton to={`${match.path}/button`}>Button</LinkButton>
        <LinkButton to={`${match.path}/navbar`}>Navbar</LinkButton>
      </SubTabConatiner>
      <ContentConatiner>
        <Route exact path={`${match.path}/`} render={() => <Main />} />
        <Route path={`${match.path}/test`} component={Test} />
        <Route path={`${match.path}/button`} render={() => <Button />} />
        <Route path={`${match.path}/navbar`} render={() => <Navbar />} />
      </ContentConatiner>
    </Container>
  );
}

export default Contents;
