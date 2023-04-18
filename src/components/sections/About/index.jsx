import React from "react";
import * as S from "./styled";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <Grid container direction="row">
      <S.Logo />
      <Grid direction="column">
        <S.SubTitle>Hello,</S.SubTitle>
        <S.MainText>
          I am Kamash Akhmed, Frontend developer with 2 years of commercial experience building web applications. 
          I'm open to any type of employment - whether it's in-office or remote.
        </S.MainText>
        <Grid container direction="raw">
          <Grid direction="column" mr={3}>
            <S.TextBlock>
              <S.Text>Name: </S.Text>
              <S.BoldText>Kamash Akhmed</S.BoldText>
            </S.TextBlock>
            <S.TextBlock>
              <S.Text>Birthday:</S.Text>
              <S.BoldText>19 August, 1998</S.BoldText>
            </S.TextBlock>
          </Grid>
          <Grid direction="column">
            <S.TextBlock>
              <S.Text>Location: </S.Text>
              <S.BoldText>Minsk, Belarus</S.BoldText>
            </S.TextBlock>
            <S.TextBlock>
              <S.Text>Email:</S.Text>
              <S.BoldText>kamash19@gmail.com</S.BoldText>
            </S.TextBlock>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
