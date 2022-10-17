import React from 'react'
import { Suspense } from 'react'

import Island from './Island'
import Stoat from '../components/Stoat'
import Goat from '../components/Goat'
import Deer from '../components/Deer'
import Rabbit from '../components/Rabbit'
import Tahr from '../components/Tahr'

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
  )
}

export default Animals
