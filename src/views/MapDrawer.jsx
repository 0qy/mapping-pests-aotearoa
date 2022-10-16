import React from "react";
import { styled } from "@mui/system";
import { Button, Drawer, Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Map from "../components/Map";

const FullPageContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  color: "blue",
  zIndex: 1000000,
});

const MapContainer = styled(Box)({
  width: "80vw",
  heigth: "100vh",
});

const MapDrawer = (props) => {
  const { currentPest, drawerOpen, setDrawerOpen } = props;

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <FullPageContainer>
      <Drawer
        anchor={"left"}
        variant="temporary"
        open={drawerOpen}
        hideBackdrop={true}
        transitionDuration={800}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          },
        }}
      >
        <Box
          sx={{
            zIndex: 10000000,
            paddingTop: "30px",
            paddingLeft: "50px",
          }}
        >
          <Typography>The distribution of {currentPest} in Aotearoa</Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            top: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              zIndex: 10000000,
              position: "relative",
              right: "1px",
              top: "50%",
            }}
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </Button>
        </Box>
        <MapContainer>
          <Map />
        </MapContainer>
      </Drawer>
    </FullPageContainer>
  );
};

export default MapDrawer;
