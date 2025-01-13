import { Model } from "../public/Model";
import { Canvas } from "@react-three/fiber";
import React from "react";
import AnimatedRock from "./components/AnimatedRock";
import "./App.css";
import MyDirectioanlLight from "./components/MyDirectionalLight";
import { EffectComposer, Bloom } from '@react-three/postprocessing'


function App() {
  return (
    // Setting the camera position to 55, 25, 60
    <Canvas camera={{ position: [55, 25, 60] }} shadows>
      <MyDirectioanlLight />
      <Model />
      <AnimatedRock />
      <EffectComposer>
        <Bloom 
          intensity={1}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
