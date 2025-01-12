import { OrbitControls } from "@react-three/drei";
import { Model } from "../public/Model";
import { Canvas } from "@react-three/fiber";
import React from "react";
import AnimatedRock from "./components/AnimatedRock";
import "./App.css";

function App() {
  return (
    // Setting the camera position to 55, 25, 60
    <Canvas camera={{ position: [55, 25, 60] }} shadows>
      {/* Adding ambient light */}
      {/* Adding the floating island */}
      <Model />
      <AnimatedRock />
      {/* <primitive object={floatingIsland} /> */}
    </Canvas>
  );
}

export default App;
