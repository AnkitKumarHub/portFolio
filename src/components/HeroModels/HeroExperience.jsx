import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Canvas camera={{ position: [0, 0, isMobile? 18 : 15], fov: isMobile? 50 : 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      {/* <Particles count={100}/> */}

      <group
        scale={isMobile? 0.65 : isTablet? 0.8 : 1}
        position={isMobile?[0, -5, 0]: isTablet? [0, -4.0, 0]: [0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      > 
      <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
