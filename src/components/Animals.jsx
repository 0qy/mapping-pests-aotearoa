import React from "react";

import Island from "./Island";
import Stoat from "../components/Stoat";
import Goat from "../components/Goat";

const Animals = ({ currentPest, setCurrentPest, setShowCard }) => {
  return (
    <>
      <group>
        <Island />
        <Stoat
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setShowCard={setShowCard}
        />
        <Goat
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setShowCard={setShowCard}
        />
      </group>
    </>
  );
};

export default Animals;
