import React from "react";
import { Grid, IconButton } from "@mui/material";
import { theme } from "../../../App";
import * as S from "./styled";

import { Close, GitHub, Google, LinkedIn, Phone } from "@mui/icons-material";

const SideBar = ({ sideBar, layoutData, changeSideBar }) => {
  return (
    <>
      <S.Container sideBar={sideBar}>
        <div>
          <S.Logo />
          <S.Title>Akhmed Kamash</S.Title>
          <S.SubTitle>Front-end developer</S.SubTitle>
          <S.CloseButton>
            <IconButton onClick={changeSideBar}>
              <Close sx={{ fontSize: 30, color: theme.headerColor }} />
            </IconButton>
          </S.CloseButton>
        </div>
        <Grid container direction="column">
          {layoutData.map(({ name, image, id }) => (
            <S.LinkContainer id={id} name={name}>
              <S.Item>
                {image}
                {name}
              </S.Item>
            </S.LinkContainer>
          ))}
        </Grid>
        <S.SideBarFooter>
          <Grid container mb="5vh" sx={{ width: "120px" }}>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/satpix/"
              aria-label="LinkedIn"
            >
              <LinkedIn sx={{ fontSize: 40, color: theme.headerColor }} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://github.com/Satpix"
              aria-label="GitHub"
            >
              <GitHub sx={{ fontSize: 40, color: theme.headerColor }} />
            </IconButton>
            <IconButton
              target="_blank"
              href="mailto:kamash19@gmail.com"
              aria-label="Gmail"
            >
              <Google sx={{ fontSize: 40, color: theme.headerColor }} />
            </IconButton>
            <IconButton
              target="_blank"
              href="tel:+375291280337"
              aria-label="GitHub"
            >
              <Phone sx={{ fontSize: 40, color: theme.headerColor }} />
            </IconButton>
          </Grid>
          © 2023 Kamash A.V.
        </S.SideBarFooter>
      </S.Container>
    </>
  );
};

export default SideBar;
