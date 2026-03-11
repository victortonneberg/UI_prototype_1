import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

function D6({ isRolling, onRollComplete, result }) {
  const meshRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);
  const rollTimeRef = useRef(0);
  const targetRotationRef = useRef([0, 0, 0]);

  useFrame((state, delta) => {
    if (isRolling && meshRef.current) {
      rollTimeRef.current += delta;

      // Spin rapidly for 2 seconds
      if (rollTimeRef.current < 2) {
        meshRef.current.rotation.x += delta * 10;
        meshRef.current.rotation.y += delta * 8;
        meshRef.current.rotation.z += delta * 6;
      } else {
        // Slow down and land on result
        const finalRotations = {
          1: [0, 0, 0],
          2: [0, Math.PI / 2, 0],
          3: [0, Math.PI, 0],
          4: [0, -Math.PI / 2, 0],
          5: [Math.PI / 2, 0, 0],
          6: [-Math.PI / 2, 0, 0]
        };

        targetRotationRef.current = finalRotations[result] || [0, 0, 0];

        // Smooth interpolation to target rotation
        meshRef.current.rotation.x += (targetRotationRef.current[0] - meshRef.current.rotation.x) * 0.1;
        meshRef.current.rotation.y += (targetRotationRef.current[1] - meshRef.current.rotation.y) * 0.1;
        meshRef.current.rotation.z += (targetRotationRef.current[2] - meshRef.current.rotation.z) * 0.1;

        if (rollTimeRef.current > 3) {
          rollTimeRef.current = 0;
          onRollComplete();
        }
      }
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.2} smoothness={4}>
      <meshStandardMaterial color="white" metalness={0.2} roughness={0.4} />
      <Text position={[0, 0, 1.01]} fontSize={0.8} color="black" fontWeight="bold">1</Text>
      <Text position={[0, 0, -1.01]} fontSize={0.8} color="black" rotation={[0, Math.PI, 0]} fontWeight="bold">6</Text>
      <Text position={[1.01, 0, 0]} fontSize={0.8} color="black" rotation={[0, Math.PI / 2, 0]} fontWeight="bold">2</Text>
      <Text position={[-1.01, 0, 0]} fontSize={0.8} color="black" rotation={[0, -Math.PI / 2, 0]} fontWeight="bold">5</Text>
      <Text position={[0, 1.01, 0]} fontSize={0.8} color="black" rotation={[-Math.PI / 2, 0, 0]} fontWeight="bold">4</Text>
      <Text position={[0, -1.01, 0]} fontSize={0.8} color="black" rotation={[Math.PI / 2, 0, 0]} fontWeight="bold">3</Text>
    </RoundedBox>
  );
}

function D20({ isRolling, onRollComplete, result }) {
  const meshRef = useRef();
  const rollTimeRef = useRef(0);
  const [showNumbers, setShowNumbers] = useState(false);

  useFrame((state, delta) => {
    if (isRolling && meshRef.current) {
      rollTimeRef.current += delta;

      if (rollTimeRef.current < 2) {
        meshRef.current.rotation.x += delta * 12;
        meshRef.current.rotation.y += delta * 10;
        meshRef.current.rotation.z += delta * 8;
        setShowNumbers(false);
      } else {
        meshRef.current.rotation.x += (0 - meshRef.current.rotation.x) * 0.1;
        meshRef.current.rotation.y += (0 - meshRef.current.rotation.y) * 0.1;
        meshRef.current.rotation.z += (0 - meshRef.current.rotation.z) * 0.1;

        if (rollTimeRef.current > 3) {
          rollTimeRef.current = 0;
          setShowNumbers(true);
          onRollComplete();
        }
      }
    }
  });

  const geometry = new THREE.IcosahedronGeometry(1.5, 0);

  // Positions for all 20 faces of an icosahedron
  const d20Positions = [
    { pos: [0, 1.5, 0], rot: [-Math.PI / 2, 0, 0], num: 1 },
    { pos: [0, -1.5, 0], rot: [Math.PI / 2, 0, 0], num: 20 },
    { pos: [1.4, 0.5, 0], rot: [0, Math.PI / 2, -0.5], num: 2 },
    { pos: [-1.4, 0.5, 0], rot: [0, -Math.PI / 2, 0.5], num: 19 },
    { pos: [0.9, 0.5, 1.2], rot: [0.3, 0.5, 0], num: 3 },
    { pos: [-0.9, 0.5, 1.2], rot: [0.3, -0.5, 0], num: 18 },
    { pos: [0.9, 0.5, -1.2], rot: [-0.3, 0.5, 0], num: 4 },
    { pos: [-0.9, 0.5, -1.2], rot: [-0.3, -0.5, 0], num: 17 },
    { pos: [0.9, -0.5, 1.2], rot: [0.3, 0.5, Math.PI], num: 5 },
    { pos: [-0.9, -0.5, 1.2], rot: [0.3, -0.5, Math.PI], num: 16 },
    { pos: [0.9, -0.5, -1.2], rot: [-0.3, 0.5, Math.PI], num: 6 },
    { pos: [-0.9, -0.5, -1.2], rot: [-0.3, -0.5, Math.PI], num: 15 },
    { pos: [1.4, -0.5, 0], rot: [0, Math.PI / 2, 2.6], num: 7 },
    { pos: [-1.4, -0.5, 0], rot: [0, -Math.PI / 2, -2.6], num: 14 },
    { pos: [0, 0.5, 1.5], rot: [0.5, 0, 0], num: 8 },
    { pos: [0, -0.5, 1.5], rot: [-0.5, 0, 0], num: 13 },
    { pos: [0, 0.5, -1.5], rot: [0.5, Math.PI, 0], num: 9 },
    { pos: [0, -0.5, -1.5], rot: [-0.5, Math.PI, 0], num: 12 },
    { pos: [0.5, 1, 0.8], rot: [-0.8, 0.3, 0], num: 10 },
    { pos: [-0.5, -1, -0.8], rot: [0.8, -0.3, 0], num: 11 }
  ];

  return (
    <group ref={meshRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="white" metalness={0.2} roughness={0.4} />
      </mesh>
      {showNumbers && d20Positions.map((face, index) => (
        <Text
          key={index}
          position={face.pos}
          rotation={face.rot}
          fontSize={0.4}
          color="black"
          fontWeight="bold"
        >
          {face.num}
        </Text>
      ))}
    </group>
  );
}

function Dice3D({ type, isRolling, onRollComplete, result }) {
  const DiceComponent = type === 6 ? D6 : D20;

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <DiceComponent
          isRolling={isRolling}
          onRollComplete={onRollComplete}
          result={result}
        />
      </Canvas>
    </div>
  );
}

export default Dice3D;
