"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { colors } from "@/lib/theme";

// Water Bottle Geometry Component
function WaterBottle({ isDragging }: { isDragging: boolean }) {
  const bottleRef = useRef<THREE.Group>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    // Water shimmer effect
    if (waterRef.current) {
      const material = waterRef.current.material as THREE.MeshStandardMaterial;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      }
    }
    
    // Slow auto-rotate when not dragging
    if (bottleRef.current && !isDragging) {
      bottleRef.current.rotation.y += 0.002;
    }
  });

  // Create bottle geometry - 20L Water Jar Style
  const bottleGeometry = useMemo(() => {
    const points = [];
    
    // Wide flat bottom
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(1.1, 0));
    points.push(new THREE.Vector2(1.15, 0.03));
    points.push(new THREE.Vector2(1.2, 0.1));
    // Base curve
    points.push(new THREE.Vector2(1.28, 0.25));
    // Cylindrical body
    points.push(new THREE.Vector2(1.35, 0.5));
    points.push(new THREE.Vector2(1.38, 1.0));
    points.push(new THREE.Vector2(1.38, 1.8));
    points.push(new THREE.Vector2(1.35, 2.3));
    // Upper shoulder
    points.push(new THREE.Vector2(1.28, 2.55));
    points.push(new THREE.Vector2(1.1, 2.75));
    points.push(new THREE.Vector2(0.85, 2.95));
    // Handle grip area
    points.push(new THREE.Vector2(0.55, 3.1));
    points.push(new THREE.Vector2(0.48, 3.15));
    // Neck
    points.push(new THREE.Vector2(0.45, 3.25));
    points.push(new THREE.Vector2(0.42, 3.5));
    // Neck lip
    points.push(new THREE.Vector2(0.5, 3.55));
    points.push(new THREE.Vector2(0.52, 3.6));
    points.push(new THREE.Vector2(0.52, 3.65));
    points.push(new THREE.Vector2(0.42, 3.65));
    
    return new THREE.LatheGeometry(points, 48); // Reduced from 64
  }, []);

  // Water inside geometry
  const waterGeometry = useMemo(() => {
    const points = [];
    
    points.push(new THREE.Vector2(0, 0.15));
    points.push(new THREE.Vector2(1.0, 0.15));
    points.push(new THREE.Vector2(1.15, 0.25));
    points.push(new THREE.Vector2(1.28, 0.5));
    points.push(new THREE.Vector2(1.3, 1.0));
    points.push(new THREE.Vector2(1.3, 1.7));
    points.push(new THREE.Vector2(1.28, 2.2));
    points.push(new THREE.Vector2(1.15, 2.5));
    // Water surface
    points.push(new THREE.Vector2(0.9, 2.7));
    points.push(new THREE.Vector2(0.5, 2.85));
    points.push(new THREE.Vector2(0, 2.9));
    
    return new THREE.LatheGeometry(points, 48); // Reduced from 64
  }, []);



  return (
    <Float
      speed={1.2}
      rotationIntensity={0}
      floatIntensity={0.4}
      floatingRange={[-0.08, 0.08]}
    >
      <group ref={bottleRef} scale={0.6} position={[0, -1, 0]}>
        {/* Bottle Glass */}
        <mesh geometry={bottleGeometry}>
          <MeshTransmissionMaterial
            backside
            samples={4} // Reduced from 6
            thickness={0.12}
            chromaticAberration={0.01}
            anisotropy={0.05}
            distortion={0.01}
            distortionScale={0.03}
            temporalDistortion={0.01}
            iridescence={0.1}
            iridescenceIOR={1.2}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            transmission={0.95}
            roughness={0.02}
            color="#f0f9ff"
          />
        </mesh>

        {/* Water Inside */}
        <mesh ref={waterRef} geometry={waterGeometry}>
          <meshStandardMaterial
            color={colors.accent}
            transparent
            opacity={0.7}
            roughness={0.02}
            metalness={0.02}
            emissive={colors.accentSecondary}
            emissiveIntensity={0.15}
          />
        </mesh>


        {/* Cap */}
        <mesh position={[0, 3.72, 0]}>
          <cylinderGeometry args={[0.56, 0.54, 0.22, 24]} />
          <meshStandardMaterial
            color={colors.accentDarker}
            roughness={0.35}
            metalness={0.4}
          />
        </mesh>

        {/* Cap top */}
        <mesh position={[0, 3.84, 0]}>
          <cylinderGeometry args={[0.5, 0.56, 0.08, 24]} />
          <meshStandardMaterial
            color={colors.accentDark}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>

        {/* Cap ring detail */}
        <mesh position={[0, 3.6, 0]}>
          <torusGeometry args={[0.54, 0.025, 8, 24]} />
          <meshStandardMaterial
            color={colors.accentSecondary}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>

        {/* Grip rings on neck */}
        {[3.2, 3.25, 3.3].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <torusGeometry args={[0.47, 0.012, 6, 24]} />
            <meshStandardMaterial
              color={colors.accentLight}
              transparent
              opacity={0.6}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* Brand Name - Aqualuxe */}
        <Text
          position={[0, 1.5, 1.42]}
          rotation={[0, 0, 0]}
          fontSize={0.28}
          color={colors.accent}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
          letterSpacing={0.08}
        >
          AQUALUXE
          <meshStandardMaterial
            color={colors.accent}
            emissive={colors.accent}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Text>

        {/* Brand Tagline */}
        <Text
          position={[0, 1.15, 1.42]}
          rotation={[0, 0, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.15}
        >
          PURE WATER
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.15}
            transparent
            opacity={0.9}
          />
        </Text>
      </group>
    </Float>
  );
}

// Scene with Lighting and Controls
function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <>
      {/* Orbit Controls for drag rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        rotateSpeed={0.5}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />

      {/* Optimized Lighting Setup - fewer lights for better performance */}
      <ambientLight intensity={0.5} />
      
      {/* Key Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#ffffff"
      />
      
      {/* Fill Light */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.5}
        color="#e0f2fe"
      />
      
      {/* Rim Light - Blue glow */}
      <pointLight
        position={[-3, 5, -3]}
        intensity={2}
        color="#3b82f6"
        distance={15}
      />
      
      {/* Back Glow */}
      <pointLight
        position={[0, 1, -5]}
        intensity={2}
        color="#0ea5e9"
        distance={12}
      />

      <WaterBottle isDragging={isDragging} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
    </>
  );
}

// Main Component with Canvas
export default function WaterBottle3D({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 40 }}
        dpr={[1, 1.5]} // Reduced max DPR for performance
        frameloop="demand" // Only render when needed
        gl={{ 
          antialias: false, // Disable antialiasing for better performance
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ background: "transparent" }}
        performance={{ min: 0.5 }} // Allow frame rate reduction
      >
        <Scene />
      </Canvas>
      
      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-500 pointer-events-none flex items-center gap-2 opacity-60">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
        Drag to rotate
      </div>
    </div>
  );
}
