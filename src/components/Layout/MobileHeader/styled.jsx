import { Grid } from "@mui/material";
import styled from "styled-components";

export const Logo = styled.img`
  background-image: url(/images/logo.png);
  border-radius: 150px;
  background-position: center;
  background-size: cover;
  box-shadow: 3px 3px 10px #403b4a;
  width: 50px;
  height: 50px;
  margin: 10px 10px 10px 0px;
`;

export const MobileTitle = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.headerColor};
`;

export const Container = styled(Grid).attrs(({ theme }) => ({
  direction: "row",
  mb: 4,
  alignItems: "center",
  sx: { background: theme.mainGradient, borderRadius: "15px" },
}))`
  display: flex;
`;

export const MainContainer = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
    display: ${({ sideBar }) => (sideBar ? "none" : "block")};
  }
`;
