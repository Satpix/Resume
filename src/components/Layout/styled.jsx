import { Element } from "react-scroll";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  color: black;
`;

export const Container = styled(Element).attrs({})`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 1vh;
  }
`;

export const Block = styled.div`
  overflow: auto;
`;

export const ElementContainer = styled(Element).attrs({
  style: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "900px",
    overflow: "auto",
  },
})`
  height: 95vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
    height: calc(95vh - 85px);
  }
`;
