import React from "react";
import * as S from "./styled";
import { Grid } from "@mui/material";

const Works = () => {
  return (
    <Grid container direction="row">
      <S.CardContainer>
        <S.LinkContainer target="_blank" href="https://incheq.com/" aria-label="InCheq">
          <S.Image />
          <S.Title>Incheq</S.Title>
          <S.Text>
            Task Verification Platform that automatically alerts users of
            maintenance, checklists, tasks, or verification points that need to
            be executed. The front-end part was developed using React and Redux.
          </S.Text>
        </S.LinkContainer>
      </S.CardContainer>
    </Grid>
  );
};

export default Works;
