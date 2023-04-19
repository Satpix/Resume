import { Grid } from "@mui/material";
import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled(Grid).attrs(({ theme }) => ({
  direction: "column",
  justifyContent: "space-between",
  alignItems: "left",
  wrap: "nowrap",
  sx: {
    background: theme.mainGradient,
    borderRadius: "15px",
    maxWidth: "300px",
    minWidth: "250px",
    height: "94vh",
    maxHeight: "1100px",
    position: "relative",
  },
  mr: 2,
  p: 2,
}))`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
    display: ${({ sideBar }) => (sideBar ? "flex" : "none")};
  }
`;

export const LinkContainer = styled(Link).attrs(({ id, name }) => ({
  key: id,
  to: name,
  spy: "true",
  smooth: "true",
  duration: 350,
  containerId: "containerElement",
  style: { cursor: "pointer" },
}))`
  &:hover {
    background: ${({ theme }) => theme.hoverColor};
    border-radius: 5px;
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  background-image: url(images/logo.png);
  border-radius: 150px;
  background-position: center;
  background-size: cover;
  box-shadow: 3px 3px 10px #403b4a;
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px 0px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 900;
  margin-top: 2vh;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  margin-top: 1vh;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  list-style-type: none;
  line-height: 4vh;
  gap: 20px;
`;

export const SideBarFooter = styled.p``;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: ${({ theme }) => theme.mobileWidth}) {
    display: none;
  }
`;
