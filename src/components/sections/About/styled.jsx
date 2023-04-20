import { Grid } from "@mui/material";
import styled from "styled-components";

export const Logo = styled.img`
  background-image: url(images/logo.png);
  border-radius: 150px;
  background-position: center;
  background-size: cover;
  box-shadow: 3px 3px 10px #403b4a;
  min-width: 120px;
  width: 120px;
  height: 120px;
  margin: 30px 40px 10px 0px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media screen and (max-width: calc(${({ theme }) => theme.mobileWidth} + 300px)) {
    flex-wrap: wrap;
  }
`;

export const SubTitle = styled.h1``;

export const MainText = styled.p`
  display: block;
  margin: 15px 0px;
`;

export const Text = styled.p`
  margin: 5px 0px 5px 0px;
  margin-right: 5px;
`;

export const BoldText = styled.p`
  margin: 5px;
  font-weight: 900;
`;

export const TextBlock = styled.div`
  display: flex;
`;
