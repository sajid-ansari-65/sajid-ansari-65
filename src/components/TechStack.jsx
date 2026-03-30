import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";
import "./styles/TechStack.css";

const techs = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Nest.js", "WordPress", "PHP", "Laravel", "Python",
  "MongoDB", "MySQL", "PostgreSQL", "AWS", "Docker",
  "Redux", "Tailwind CSS", "Git", "Express.js", "GraphQL",
];

const colors = [
  "#f7df1e", "#3178c6", "#61dafb", "#000000", "#339933",
  "#e0234e", "#21759b", "#777bb4", "#ff2d20", "#3776ab",
  "#47a248", "#4479a1", "#4169e1", "#ff9900", "#2496ed",
  "#764abc", "#06b6d4", "#f05032", "#000000", "#e10098",
];

function TechBall({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.3;
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2 + position[1]) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} castShadow>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.8}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const balls = techs.map((_, i) => {
    const angle = (i / techs.length) * Math.PI * 2;
    const radius = 3 + (i % 3) * 1.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 3;
    return { position: [x, y, z], color: colors[i % colors.length] };
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      {balls.map((ball, i) => (
        <TechBall key={i} position={ball.position} color={ball.color} />
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

const TechStack = () => {
  return (
    <div className="techstack-section">
      <div className="techstack-heading">
        <h2 className="title">Tech Stack</h2>
      </div>
      <div className="techstack-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <div className="techstack-labels">
        {techs.map((tech, i) => (
          <span key={i} className="tech-label" style={{ color: colors[i % colors.length] }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
