import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RockModel } from "/public/RockModel";

function AnimatedRock() {
  const rockRef = useRef();

  // Animation parameters
  const floatSpeed = 2;
  const floatHeight = 1;
  const initialY = 0;

  useFrame((state) => {
    // Animate rock floating up and down
    if (rockRef.current) {
      rockRef.current.position.y =
        initialY + Math.sin(state.clock.elapsedTime * floatSpeed) * floatHeight;
    }
  });

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1}
        minDistance={30}
        maxDistance={85}
      />
      <RockModel ref={rockRef}/>
    </>
  );
}

export default AnimatedRock;
