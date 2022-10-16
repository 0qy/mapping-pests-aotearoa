import React, { useState } from "react";
import MapDrawer from "./MapDrawer";
import PestScene from "./PestScene";

const Home = () => {
  const [currentPest, setCurrentPest] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <MapDrawer
        currentPest={currentPest}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <PestScene
        currentPest={currentPest}
        setCurrentPest={setCurrentPest}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
};

export default Home;
