import React, { useEffect, useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 topColor;
  uniform vec3 bottomColor;
  varying vec2 vUv;

  void main() {
    vec3 gradientColor = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(gradientColor, 1.0);
  }
`;

export const CanvasComponent = () => {
  return (
    <Canvas style={{ background: "transparent", height: "82vh" }}>
      <Scene style={{ zIndex: 999 }} />
    </Canvas>
  );
};

const Scene = () => {
  const meshRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useFrame(() => {
    meshRef.current.position.x = (scrollPosition / window.innerWidth) * 20;
    meshRef.current.wireframe = true;
    meshRef.current.scale.set(
      1 + scrollPosition / (window.innerHeight * 0.2),
      1 + scrollPosition / (window.innerHeight * 0.2),
      1 + scrollPosition / (window.innerHeight * 0.2)
    );
    meshRef.current.rotation.z = scrollPosition * 0.002;
    meshRef.current.rotation.y = scrollPosition * 0.005;
    meshRef.current.rotation.x = scrollPosition * 0.003;

    const opacity = scrollPosition / (window.innerHeight * 0.5);
    meshRef.current.material.opacity = opacity;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const material = new MeshBasicMaterial({
    color: "#fff",
    wireframe: true,
    transparent: true, // Permite que o material seja transparente
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      material={material}
      className="cube-mesh"
    />
  );
};
