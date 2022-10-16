import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const HeadingContainer = styled(Box)({
  width: "65vw",
  position: "absolute",
  zIndex: 100,
  color: "white",
  padding: "30px",
});

const Heading = () => {
  return (
    <>
      <HeadingContainer>
        <Typography variant="h4">
          Invasive Species Distribution in Aotearoa New Zealand
        </Typography>
      </HeadingContainer>
    </>
  );
};

export default Heading;
