import React from "react";
import styled from "styled-components";

function Navbar(props) {
  const { id } = props;
  return (
    <Container>
      <Title>Navbar.</Title>
      <ContentContainer>
        <P>현재 사용중인 탭 (보조 탭)</P>
      <NavContainer>
       TEST 1
      </NavContainer>
      </ContentContainer>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #f9f9fa;
  border: 2px solid #f9f9fa;
  border-radius: 4.5px;
  width: 95%;
  height: 100vh;
`;

const Title = styled.div`
 font-size: 70px;
  font-weight: 900;
  color: #131313;
  margin-bottom: auto;
  padding: 40px;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const P = styled.p`
  margin: auto;
  font-size: 35px;
  width: 40%;
  font-weight: 600;
  color: #131313;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;