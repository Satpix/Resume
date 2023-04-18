import styled from "styled-components";

export const Title = styled.h2`
  position: relative;
  margin: 2vh 0;
  padding-bottom: 20px;
  margin-bottom: 40px;
  &::after {
    content: " ";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 40px;
    height: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.mainGradient};
  }
`;
