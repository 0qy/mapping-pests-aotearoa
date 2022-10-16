import React from "react";

import Island from "./Island";
import Stoat from "../components/Stoat";
import Goat from "../components/Goat";

const Animals = ({ currentPest, setCurrentPest, setDrawerOpen }) => {
  return (
    <>
      <group>
        <Island />
        <Stoat
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setDrawerOpen={setDrawerOpen}
        />
        <Goat
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setDrawerOpen={setDrawerOpen}
        />
      </group>
    </>
  );
};

export default Animals;
