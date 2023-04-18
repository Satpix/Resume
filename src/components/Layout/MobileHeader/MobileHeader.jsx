import React from "react";
import { IconButton } from "@mui/material";
import { Reorder } from "@mui/icons-material";
import { theme } from "../../../App";
import * as S from "./styled";

const MobileHeader = ({ changeSideBar, sideBar }) => {
  return (
    <S.MainContainer sideBar={sideBar}>
      <S.Container>
        <IconButton onClick={changeSideBar} aria-label="sidebar">
          <Reorder sx={{ fontSize: 40, color: theme.headerColor }} />
        </IconButton>
        <S.Logo />
        <S.MobileTitle>Akhmed Kamash</S.MobileTitle>
      </S.Container>
    </S.MainContainer>
  );
};

export default MobileHeader;
