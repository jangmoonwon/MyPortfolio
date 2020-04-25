import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../components/Home";
import Detaile from "../components/Detaile";
import { TextInputBoard } from "../boards";
import { TestBoard } from "../boards";

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
        <Route path="/text-input" component={TextInputBoard} />
        <Route path="/test" component={TestBoard} />
        <Route path="/Detaile" component={Detaile} />
        <Route path="/">찾을 수 없는 페이지입니다.</Route>
      </Switch>
    </Container>
  );
};

export default RootRouter;
