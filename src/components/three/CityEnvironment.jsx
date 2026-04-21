import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CityEnvironment() {
  const buildingsRef = useRef()

  const buildings = useMemo(() => {
    const b = []
    const count = 40

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 8 + Math.random() * 5
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius - 5
      const height = 2 + Math.random() * 8
      const width = 0.5 + Math.random() * 1.5
      const depth = 0.5 + Math.random() * 1.5

      b.push({
        position: [x, height / 2 - 3, z],
        size: [width, height, depth],
        color: Math.random() > 0.7 ? '#1B4A7F' : '#0E0E0E',
        windowColor: Math.random() > 0.5 ? '#E62429' : '#A4C8FF',
        windowIntensity: Math.random() * 0.5
      })
    }

    return b
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (buildingsRef.current) {
      buildingsRef.current.children.forEach((child, i) => {
        if (child.material && child.material.emissiveIntensity !== undefined) {
          const baseIntensity = buildings[i]?.windowIntensity || 0.1
          child.material.emissiveIntensity = baseIntensity + Math.sin(t * 2 + i) * 0.1
        }
      })
    }
  })

  return (
    <group ref={buildingsRef}>
      {buildings.map((building, i) => (
        <group key={i} position={building.position}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={building.size} />
            <meshStandardMaterial
              color={building.color}
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>

          {building.windowColor && (
            <>
              {building.size[1] > 3 && (
                <mesh position={[building.size[0] / 2 + 0.01, 0, 0]}>
                  <planeGeometry args={[0.1, building.size[1] * 0.8]} />
                  <meshStandardMaterial
                    color={building.windowColor}
                    emissive={building.windowColor}
                    emissiveIntensity={building.windowIntensity}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              )}
              {building.size[1] > 3 && (
                <mesh position={[-building.size[0] / 2 - 0.01, 0, 0]} rotation={[0, Math.PI, 0]}>
                  <planeGeometry args={[0.1, building.size[1] * 0.8]} />
                  <meshStandardMaterial
                    color={building.windowColor}
                    emissive={building.windowColor}
                    emissiveIntensity={building.windowIntensity}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              )}
            </>
          )}
        </group>
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={1}
          metalness={0}
        />
      </mesh>

      <gridHelper
        args={[50, 50, '#1B4A7F', '#0E0E0E']}
        position={[0, -3.99, 0]}
      />
    </group>
  )
}

export default CityEnvironment