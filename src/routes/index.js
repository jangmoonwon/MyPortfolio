import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Contents from "../components/Contents";
import Error from "../components/Error";
import About from "../components/About";

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
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contents" component={Contents} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </Container>
  );
};

export default RootRouter;
