import React from "react";
import * as S from "./styled";

const ExperienceItem = ({ experience: { year, degree, content } }) => {
  return (
    <S.ItemContainer>
      <S.Title>{year}</S.Title>
      <S.TextBlock>
        <S.BoldText>{degree}</S.BoldText>
        {content.map((item) => (
          <S.Text>{item}</S.Text>
        ))}
      </S.TextBlock>
    </S.ItemContainer>
  );
};

export default ExperienceItem;
