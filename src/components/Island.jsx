import React, { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Island = () => {
  const obj = useLoader(OBJLoader, "/models/island.obj");

  const [colorMap, normalMap, roughnessMap] = useTexture([
    "/texture/island_Diffuse.png",
    "/texture/island_Normal.png",
    "/texture/island_Glossiness.png",
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

  return (
    <>
      <mesh
        geometry={geometry}
        scale={0.8}
        position={[0, -5, 0]}
        rotation={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </>
  );
};

export default Island;
