import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Detaile() {
    return(
        <div>
            <div>
            This is Detaile Pages.
            </div>
            <LinkButton to="/">홈으로 가기</LinkButton> {/*홈 아이콘으로 대체 예정*/}
        </div>
    );
}

export default Detaile;

const LinkButton = styled(Link)`
margin-top: 50px;
  font-size: 20px;
`;