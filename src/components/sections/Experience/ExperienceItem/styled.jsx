import { Grid } from "@mui/material";
import styled from "styled-components";

export const Text = styled.p`
  margin: 5px 0px 5px 0px;
`;

export const BoldText = styled(Text)`
  font-size: 22px;
  font-weight: 900;
`;
export const Title = styled.p`
  position: relative;
  margin: 5px 0px 5px 0px;
  min-width: 120px;
  &::before {
    content: " ";
    position: absolute;
    left: 114px;
    z-index: 10;
    top: 5px;
    width: 10px;
    height: 10px;
    border: 2px ${({ theme }) => theme.secondaryColor} solid;
    background: ${({ theme }) => theme.headerColor};
    border-radius: 50%;
  }
`;

export const TextBlock = styled.div``;

export const ItemContainer = styled(Grid).attrs({
  container: "true",
  direction: "row",
  wrap: "nowrap",
  gap: "30px",
})`
  margin-bottom: 40px;
`;
