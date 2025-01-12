import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from "@react-three/drei";

function AnimatedRock() {
  const rockRef = useRef();
  const { scene } = useGLTF("/floatingRocks.glb");
  
  // Animation parameters
  const floatSpeed = 3;
  const floatHeight = 1;
  const initialY = 0;

  useFrame((state) => {
    // Animate rock floating up and down
    if (rockRef.current) {
      rockRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * floatSpeed) * floatHeight;
    }
  });

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}      
        autoRotateSpeed={1} 
        minDistance={30} maxDistance={85}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Animated rock */}
      <primitive 
        ref={rockRef}
        object={scene}
        position={[0, initialY, 0]}
        scale={1}
      />
    </>
  );
}

export default AnimatedRock;