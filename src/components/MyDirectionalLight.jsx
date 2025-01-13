import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SpotLightHelper } from "three";
import { useControls } from "leva";

const MyDirectionalLight = () => {
  const spotLight = useRef();


  const spotlightIntensity = 8000;
  const ambientLightIntensity= 0.3;
  // Use Leva to add controls
  const { LightrotationSpeed, radius, height, isNight } = useControls({
    LightrotationSpeed: { value: 0.5, min: 0, max: 2, step: 0.1 },
    radius: { value: 50, min: 10, max: 100, step: 1 },
    height: { value: 41, min: 10, max: 50, step: 1 },
    isNight: false,
  });

  useFrame((state, delta) => {
    if (spotLight.current) {
      const time = state.clock.getElapsedTime();
      const x = Math.cos(time * LightrotationSpeed) * radius;
      const z = Math.sin(time * LightrotationSpeed) * radius;

      spotLight.current.position.x = x;
      spotLight.current.position.z = z;
      spotLight.current.position.y = height;
      spotLight.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <color attach="background" args={[isNight ? "#000814" : "#ffffff"]} />
      <ambientLight 
        intensity={isNight ? 0.1 : ambientLightIntensity} 
        color={isNight ? "#0a1a2a" : "#ffffff"} 
      />
      <spotLight
        ref={spotLight}
        position={[39, 41, 32]}
        angle={0.8}
        penumbra={0.5}
        intensity={isNight ? spotlightIntensity * 0.7 : spotlightIntensity}
        color={"#fff5b6"}
        distance={900}
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
};

export default MyDirectionalLight;
