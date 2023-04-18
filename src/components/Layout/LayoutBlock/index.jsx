import React from "react";
import * as S from "./styled";
import { Box, Card, Grid } from "@mui/material";

const LayoutBlock = ({ children, title }) => {
  return (
    <Grid>
      <Card sx={{ borderRadius: "15px" }}>
        <Box p={4}>
          <S.Title>{title}</S.Title>
          {children}
        </Box>
      </Card>
    </Grid>
  );
};

export default LayoutBlock;
