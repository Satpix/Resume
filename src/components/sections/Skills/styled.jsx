import styled from "styled-components";

export const Image = styled.div`
background: ${({ theme }) => theme.mainGradient};
  background-image: ${({ url }) => url};
  border: 0px;
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
`;

export const SubTitle = styled.h2`
  margin-top: 0;
`;

export const MainText = styled.p`
  display: block;
  margin: 15px 0px;
`;

export const Text = styled.p`
  margin: 5px 0px 5px 0px;
  margin-right: 5px;
  font-size: 16px;
  text-align: center;
`;

export const BoldText = styled.p`
  margin: 5px;
  font-weight: 900;
`;

export const TextBlock = styled.div`
  display: flex;
`;
