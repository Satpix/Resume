import { Card } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  width: 200px;
  height: 350px;
  &:hover {
    background: ${({ theme }) => theme.hoverColor};z
  }
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.mainGradient};
  background-image: url(images/incheq.png);
  border: 0px;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 130px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const Text = styled.div`
  padding: 10px;
  font-size: 14px;
`;

export const LinkContainer = styled.a`
  text-decoration: none;
  color: black;
`;
