import React, { useState } from "react";

import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import MapDrawer from "./MapDrawer";
import PestScene from "./PestScene";

const Home = () => {
  const [currentPest, setCurrentPest] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <Heading />
      {showCard && (
        <InfoCard
          setDrawerOpen={setDrawerOpen}
          setShowCard={setShowCard}
          currentPest={currentPest}
        />
      )}
      <MapDrawer
        currentPest={currentPest}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <PestScene
        currentPest={currentPest}
        setCurrentPest={setCurrentPest}
        setShowCard={setShowCard}
      />
    </>
  );
};

export default Home;
