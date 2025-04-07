"use client";
import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";


// Define proper types for the component props and Three.js objects
type StarBgProps = {
  [key: string]: any;  
};

const StarBg = (props: StarBgProps) => {
 
  const ref = useRef<any>(null);
  

  const particles = useMemo(() => {
    const temp: number[] = [];

    for (let i = 0; i < 5000; i++) {
      // Create random coordinates in a cube
      const x = (Math.random() - 0.5) * 2;
      const y = (Math.random() - 0.5) * 2;
      const z = (Math.random() - 0.5) * 2;
      
      // Convert to spherical coordinates
      const length = Math.sqrt(x * x + y * y + z * z);
      if (length > 0 && length <= 1.2) {

        temp.push(x, y, z);
      } else {

        i--;
      }
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-screen fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBg />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;