import React from "react";

import Island from "./Island";
import Stoat from "./pests/Stoat";
import Goat from "./pests/Goat";
import Deer from "./pests/Deer";
import Rabbit from "./pests/Rabbit";
import Tahr from "./pests/Tahr";

const Animals = ({ currentPest, setCurrentPest, setShowCard }) => {
  return (
    <>
      <group>
        <Island />
        <Deer
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setShowCard={setShowCard}
        />
        <Rabbit
          currentPest={currentPest}
          setCurrentPest={setCurrentPest}
          setShowCard={setShowCard}
        />
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
