import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AnimatedSphereProps {
  position: [number, number, number];
  scale: number | [number, number, number];
  color: string;
}

const AnimatedSphere = ({ position, scale, color }: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#8B5DFF" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00D4FF" intensity={0.8} />
        
        <AnimatedSphere position={[-4, 2, -5]} scale={1.5} color="#8B5DFF" />
        <AnimatedSphere position={[4, -2, -8]} scale={2} color="#00D4FF" />
        <AnimatedSphere position={[0, 0, -10]} scale={1} color="#FF6EC7" />
        <AnimatedSphere position={[-6, -4, -6]} scale={1.2} color="#8B5DFF" />
        <AnimatedSphere position={[6, 4, -7]} scale={1.8} color="#00D4FF" />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default CosmicBackground;