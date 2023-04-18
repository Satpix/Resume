import styled from "styled-components";

export const Text = styled.p`
  margin: 5px 0px 5px 0px;
  margin-right: 5px;
`;

export const ExperienceBlock = styled.div`
  position: relative;
`;
export const TimeLine = styled.span`
  position: absolute;
  top: -10px;
  left: 120px;
  bottom: -10px;
  width: 2px;
  background: ${({ theme }) => theme.flippedGradient};

`;
