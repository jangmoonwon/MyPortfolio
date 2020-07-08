import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src="/Img/icon.png" alt="Profile" />
        <Info>
          Profile
        </Info>
        <Hr />
      </ProfileContainer>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const LinkButton = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #536dfe;
    transition: 0.3s;
  }
  margin-top: 30px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9fa;
  border-radius: 4.5px;
  width: 65vh;
  height: 75vh;
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.5);
`;

const ProfileImage = styled.img`
  margin-top: 50px;
  padding: 1px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fec202;
`;

const Info = styled.div`
  margin-top: 15px;
  font-size: 35px;
  font-weight: 500;
`;

const Hr = styled.hr`
  width: 50vh;
  height: 2px;
  margin-top: 35px;
  background-color: #888888;
  border: 0;
`;
