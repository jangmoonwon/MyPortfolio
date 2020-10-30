import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../components/HomePage";
import ProfilePage from "../components/ProfilePage";
import Contents from "../components/Contents";
import ErrorPage from "../components/ErrorPage";
import AboutPage from "../components/AboutPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100%;
`;

const RootRouter = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profilepage" component={ProfilePage} />
        <Route path="/contents" component={Contents} />
        <Route path="/aboutpage" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Container>
    
  );
};

export default RootRouter;
