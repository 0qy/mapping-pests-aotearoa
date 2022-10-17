import React, { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Tahr = (props) => {
  const { setCurrentPest, setShowCard } = props;
  const obj = useLoader(OBJLoader, "/models/tahr.obj");
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      obj.rotation.y += 0.02;
    }
  });
  const [colorMap, roughnessMap] = useTexture([
    "/texture/tahr_map.jpg",
    "texture/tahr_roughness.jpg",
  ]);

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  const handleClick = () => {
    setCurrentPest("himalayanTahr");
    setShowCard(true);
  };
  return (
    <>
      <mesh
        geometry={geometry}
        scale={0.047}
        position={[-1.3, -1.5, -0.3]}
        rotation={[Math.PI / -2, 0, Math.PI / 1.3]}
        onClick={handleClick}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <meshPhysicalMaterial map={colorMap} roughnessMap={roughnessMap} />
      </mesh>
    </>
  );
};

export default Tahr;
