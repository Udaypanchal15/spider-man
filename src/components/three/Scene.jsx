import React from 'react'

function WebLines() {
  return (
    <group>
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 0.02]} />
        <meshBasicMaterial color="#A4C8FF" />
      </mesh>
      <mesh position={[-0.5, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 0.02]} />
        <meshBasicMaterial color="#A4C8FF" />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[2, 0.02]} />
        <meshBasicMaterial color="#A4C8FF" />
      </mesh>
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[2, 0.02]} />
        <meshBasicMaterial color="#A4C8FF" />
      </mesh>

      <mesh>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color="#E62429" />
      </mesh>
      <mesh>
        <circleGeometry args={[0.6, 32]} />
        <meshBasicMaterial color="#E62429" />
      </mesh>
      <mesh>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="#E62429" />
      </mesh>
      <mesh>
        <circleGeometry args={[1.2, 32]} />
        <meshBasicMaterial color="#E62429" />
      </mesh>
      <mesh>
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial color="#E62429" />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <group>
      <color attach="background" args={['#080808']} />
      <WebLines />
    </group>
  )
}

export default Scene