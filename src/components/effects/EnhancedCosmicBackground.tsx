import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingOrbProps {
  position: [number, number, number];
  scale: number | [number, number, number];
  color: string;
  speed?: number;
}

const FloatingOrb = ({ position, scale, color, speed = 1 }: FloatingOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

interface NebulaCloudProps {
  position: [number, number, number];
  scale: number | [number, number, number];
}

const NebulaCloud = ({ position, scale }: NebulaCloudProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 32, 32);
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshBasicMaterial
        color="#8B5DFF"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const EnhancedCosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#8B5DFF" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#00D4FF" intensity={1.5} />
        <pointLight position={[0, 15, 5]} color="#FF6EC7" intensity={1} />
        <spotLight position={[20, 20, 20]} color="#8B5DFF" intensity={1} angle={0.3} />
        
        {/* Animated Stars */}
        <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade speed={1} />
        
        {/* Floating Cosmic Orbs */}
        <FloatingOrb position={[-8, 3, -12]} scale={2} color="#8B5DFF" speed={0.8} />
        <FloatingOrb position={[8, -3, -15]} scale={2.5} color="#00D4FF" speed={1.2} />
        <FloatingOrb position={[0, 5, -18]} scale={1.5} color="#FF6EC7" speed={0.6} />
        <FloatingOrb position={[-12, -2, -10]} scale={1.8} color="#8B5DFF" speed={1.0} />
        <FloatingOrb position={[12, 2, -14]} scale={2.2} color="#00D4FF" speed={0.9} />
        <FloatingOrb position={[-5, -8, -16]} scale={1.3} color="#FF6EC7" speed={1.1} />
        <FloatingOrb position={[5, 8, -11]} scale={1.9} color="#8B5DFF" speed={0.7} />
        
        {/* Nebula Clouds */}
        <NebulaCloud position={[-15, 5, -25]} scale={8} />
        <NebulaCloud position={[15, -5, -30]} scale={10} />
        <NebulaCloud position={[0, 0, -35]} scale={12} />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default EnhancedCosmicBackground;