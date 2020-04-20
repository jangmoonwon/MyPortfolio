import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  background-color: #ddd;
`;
const RouteButton = styled(Link)`
    margin: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`;

function Tab() {
  return (
    <Container color="#fff">
      <RouteButton to="/">Overview</RouteButton>
      <RouteButton to="/button">Comp1</RouteButton>
      <RouteButton to="/text-input">Comp2</RouteButton>
      <RouteButton to="/toggle-switch">Comp3</RouteButton>
    </Container>
  );
}

export default Tab;