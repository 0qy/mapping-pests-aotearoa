import React, { useState } from "react";
import { styled } from "@mui/system";
import { Button, Drawer, Box } from "@mui/material";

const FullPageContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  color: "white",
  zIndex: 1000000,
});

const MapContainer = styled(Box)({
  width: "80vw",
  heigth: "100vh",
});

const MapDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <FullPageContainer>
      <Button onClick={handleDrawerOpen}>left</Button>
      <Drawer
        anchor={"left"}
        variant="temporary"
        open={drawerOpen}
        hideBackdrop={true}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          },
        }}
      >
        <MapContainer>
          <p>drawer content</p>
        </MapContainer>
      </Drawer>
    </FullPageContainer>
  );
};

export default MapDrawer;
