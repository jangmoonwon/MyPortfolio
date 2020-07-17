import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "../Contents/Main";
import SpinnerBoard from "./Spinner";
import TextInputBoard from "./TextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SubTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fa;
  width: 100%;
  height: 7vh;
`;
const ContentConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 88vh;
`;

const LinkButton = styled(NavLink)`
  justify-content: center;
  margin: auto;
  text-decoration: none;
  color: #131313;
  font-size: 25px;
  font-weight: 400;
  &:hover {
    color: #3282b8;
  }
  &.active {
    color: #3282b8;
  }
`;

function Contents({ match }) {
  return (
    <Container>
      <SubTab>
        <LinkButton to={`${match.path}/spinner`}>Spinner</LinkButton>
        <LinkButton to={`${match.path}/text-input`}>TextInput</LinkButton>
      </SubTab>
      <ContentConatiner>
        <Switch>
          <Route exact path={`${match.path}/`} component={Main} />
          <Route path={`${match.path}/spinner`} component={SpinnerBoard} />
          <Route path={`${match.path}/text-input`} component={TextInputBoard} />
        </Switch>
      </ContentConatiner>
    </Container>
  );
}

export default Contents;
