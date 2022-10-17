import React from "react";

import Island from "./Island";
import Stoat from "../components/Stoat";
import Goat from "../components/Goat";
import Tahr from "../components/Tahr";

const Animals = ({ currentPest, setCurrentPest, setShowCard }) => {
  return (
    <>
      <group>
        <Island />
        <Tahr
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setShowCard={setShowCard}
        />
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
