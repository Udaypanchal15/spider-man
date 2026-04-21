import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function SpiderMan() {
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.18
      groupRef.current.position.y = Math.sin(t * 0.45) * 0.1 + 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main circle - body */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial color="#E62429" side={2} />
      </mesh>

      {/* Inner circle - darker red */}
      <mesh position={[0, 0, 0.01]}>
        <circleGeometry args={[0.42, 32]} />
        <meshStandardMaterial color="#1a1a2e" side={2} />
      </mesh>

      {/* Red dot - eye (top of inner circle) */}
      <mesh position={[0, 0.25, 0.02]}>
        <circleGeometry args={[0.08, 16]} />
        <meshStandardMaterial color="#E62429" emissive="#E62429" emissiveIntensity={0.8} side={2} />
      </mesh>

      {/* Red horizontal line - above */}
      <mesh position={[0, 0.08, 0.02]}>
        <planeGeometry args={[0.35, 0.04]} />
        <meshStandardMaterial color="#E62429" emissive="#E62429" emissiveIntensity={0.3} side={2} />
      </mesh>

      {/* Blue horizontal line - below */}
      <mesh position={[0, -0.08, 0.02]}>
        <planeGeometry args={[0.35, 0.04]} />
        <meshStandardMaterial color="#A4C8FF" emissive="#A4C8FF" emissiveIntensity={0.3} side={2} />
      </mesh>

      {/* Left circle - blue (left side) */}
      <mesh position={[-0.22, -0.28, 0.02]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#A4C8FF" emissive="#A4C8FF" emissiveIntensity={0.5} side={2} />
      </mesh>

      {/* Left circle inner */}
      <mesh position={[-0.22, -0.28, 0.03]}>
        <circleGeometry args={[0.05, 12]} />
        <meshStandardMaterial color="#1a1a2e" side={2} />
      </mesh>

      {/* Right circle - red (right side) */}
      <mesh position={[0.22, -0.28, 0.02]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#E62429" emissive="#E62429" emissiveIntensity={0.5} side={2} />
      </mesh>

      {/* Right circle inner */}
      <mesh position={[0.22, -0.28, 0.03]}>
        <circleGeometry args={[0.05, 12]} />
        <meshStandardMaterial color="#1a1a2e" side={2} />
      </mesh>

      {/* Web lines extending from circles - left */}
      <mesh position={[-0.45, -0.28, 0.02]} rotation={[0, 0, -0.3]}>
        <planeGeometry args={[0.2, 0.015]} />
        <meshStandardMaterial color="#A4C8FF" transparent opacity={0.5} side={2} />
      </mesh>
      <mesh position={[-0.52, -0.35, 0.02]} rotation={[0, 0, -0.5]}>
        <planeGeometry args={[0.15, 0.015]} />
        <meshStandardMaterial color="#A4C8FF" transparent opacity={0.4} side={2} />
      </mesh>

      {/* Web lines extending from circles - right */}
      <mesh position={[0.45, -0.28, 0.02]} rotation={[0, 0, 0.3]}>
        <planeGeometry args={[0.2, 0.015]} />
        <meshStandardMaterial color="#E62429" transparent opacity={0.5} side={2} />
      </mesh>
      <mesh position={[0.52, -0.35, 0.02]} rotation={[0, 0, 0.5]}>
        <planeGeometry args={[0.15, 0.015]} />
        <meshStandardMaterial color="#E62429" transparent opacity={0.4} side={2} />
      </mesh>
    </group>
  )
}

export default SpiderMan