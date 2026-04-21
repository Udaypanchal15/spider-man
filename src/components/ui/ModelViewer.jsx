import React, { useState } from 'react'

function generateWebPaths() {
  const RADII = 14
  const ANCHOR_QUANTITY = 12
  const center = { x: 200, y: 200 }

  function findPointInCircle(x, y, distance, angleInDegrees) {
    const radians = (angleInDegrees * Math.PI) / 180
    return {
      x: Math.cos(radians) * distance + x,
      y: Math.sin(radians) * distance + y
    }
  }

  function midPointBetween(pointA, pointB) {
    return {
      x: (pointB.x + pointA.x) * 0.5,
      y: (pointB.y + pointA.y) * 0.5
    }
  }

  function calculateCurvePath(pointA, pointB, offset) {
    const midpoint = midPointBetween(pointA, pointB)
    const theta = Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) - Math.PI / 2
    const tensor = {
      x: midpoint.x - offset * Math.cos(theta),
      y: midpoint.y - offset * Math.sin(theta)
    }
    return `M${pointA.x} ${pointA.y} Q${tensor.x} ${tensor.y} ${pointB.x} ${pointB.y}`
  }

  const axes = []
  const anchorPoints = []
  const angleIncrement = 360 / RADII

  for (let i = 0; i <= RADII; i++) {
    const angle = i * angleIncrement
    const length = 140 + Math.random() * 40
    const end = findPointInCircle(center.x, center.y, length, angle)
    axes.push({ start: center, end })
  }

  for (let i = 0; i < axes.length; i++) {
    const line = axes[i]
    const anchors = []
    for (let j = 1; j <= ANCHOR_QUANTITY; j++) {
      const ratio = j / ANCHOR_QUANTITY
      anchors.push({
        x: center.x + (line.end.x - center.x) * ratio,
        y: center.y + (line.end.y - center.y) * ratio
      })
    }
    anchorPoints.push(anchors)
  }

  let pathD = ""
  for (let i = 0; i < axes.length - 1; i++) {
    const currentAnchors = anchorPoints[i]
    const nextAnchors = anchorPoints[i + 1]
    
    for (let j = 0; j < currentAnchors.length; j++) {
      const start = currentAnchors[j]
      const end = nextAnchors[j]
      
      if (start && end) {
        const tension = (j + 1) * 0.6
        const curvePath = calculateCurvePath(start, end, tension)
        if (Math.random() > 0.08) {
          pathD += curvePath + " "
        }
      }
    }
  }

  return { axes, pathD, center }
}

function SpiderWebSVG() {
  const [hovered, setHovered] = useState(false)
  const { axes, pathD, center } = generateWebPaths()

  const messages = [
    "SPIDEY IS BUSY SAVING THE WORLD 🔴",
    "WEB HEADED TO THE MOVIES 🎬",
    "PETER IS UNDERCOVER 😎",
    "SPINNING SOMETHING NEW... 🎯",
    "WEB SOLUTIONS IN PROGRESS 🕸️",
    "SWINGING THROUGH BROOKLYN 🌃",
    "PATENT PENDING 🧠",
    "CATCHING THE BAD GUYS 🕷️"
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg viewBox="0 0 400 400" className="w-[110%] h-[110%] max-w-none">
        <defs>
          <filter id="glow-red-web" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-blue-web" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {axes.map((line, i) => (
          <line
            key={`axis-${i}`}
            x1={line.start.x}
            y1={line.start.y}
            x2={line.end.x}
            y2={line.end.y}
            stroke="#A4C8FF"
            strokeWidth="1.2"
            opacity="0.65"
            filter="url(#glow-blue-web)"
          />
        ))}
        
        <path
          d={pathD}
          fill="none"
          stroke="#E62429"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#glow-red-web)"
        />
        
        <circle cx={center.x} cy={center.y} r="6" fill="#E62429" filter="url(#glow-red-web)" />
      </svg>

      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm" />
        <div className="relative bg-[#151520] px-8 py-5 border-2 border-[#E62429]/60 shadow-[0_0_30px_rgba(230,36,41,0.3)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E62429] rounded-full animate-pulse" />
          <p className="font-label text-lg text-[#E62429] tracking-[0.25em] text-center">
            {randomMessage}
          </p>
          <p className="font-label text-xs text-[#A4C8FF] tracking-[0.3em] text-center mt-3">
            TRY AGAIN LATER
          </p>
        </div>
      </div>
    </div>
  )
}

function ModelViewer() {
  return (
    <section id="model" className="py-24 bg-[#0a0a0f] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-white">
              SPIDER-MAN 2099
            </h2>
            <p className="font-body text-[#A4C8FF] text-sm mt-2">
              ACROSS THE SPIDER-VERSE
            </p>
            <div className="h-1 w-24 bg-[#E62429] mt-4" />
          </div>
          <div className="flex items-center gap-2 bg-[#1a1a1f] px-4 py-2 border-l-2 border-[#A4C8FF]">
            <span className="material-symbols-outlined text-[#A4C8FF] text-sm animate-pulse">hub</span>
            <span className="font-label text-xs tracking-[0.2em] text-[#A4C8FF]">WEB GENERATOR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative h-[600px] bg-[#0d0d10] border border-[#252530] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E62429]/8 via-transparent to-[#A4C8FF]/8" />
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <SpiderWebSVG />
            </div>
            
            <div className="absolute bottom-4 left-4">
              <div className="bg-[#1a1a1f]/80 backdrop-blur px-3 py-2 border border-[#E62429]/30">
                <p className="font-label text-[10px] text-[#A4C8FF]">HOVER FOR STATUS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#121215] p-6 border-l-4 border-[#E62429]">
              <h3 className="font-headline text-xl font-bold text-white mb-4">SUIT SPECIFICATIONS</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-body text-xs text-[#A4C8FF] uppercase">Design</span>
                  <span className="font-body text-xs text-white">Nano-Synthetic</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-xs text-[#A4C8FF] uppercase">Material</span>
                  <span className="font-body text-xs text-white">Carbon-Exo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-xs text-[#A4C8FF] uppercase">Origin</span>
                  <span className="font-body text-xs text-white">Year 2099</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-xs text-[#A4C8FF] uppercase">Abilities</span>
                  <span className="font-body text-xs text-white">Shift/Claw</span>
                </div>
              </div>
            </div>

            <div className="bg-[#121215] p-6 border border-[#252530]">
              <h3 className="font-headline text-lg font-bold text-white mb-4">Abilities</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#A4C8FF]">
                  <span className="w-1 h-1 bg-[#E62429]" /> Shift dimensional tether
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A4C8FF]">
                  <span className="w-1 h-1 bg-[#E62429]" /> Claw grappling
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A4C8FF]">
                  <span className="w-1 h-1 bg-[#E62429]" /> Enhanced strength
                </li>
                <li className="flex items-center gap-2 text-sm text-[#A4C8FF]">
                  <span className="w-1 h-1 bg-[#E62429]" /> Feline reflexes
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#E62429] text-white font-headline font-bold uppercase tracking-widest py-4 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300">
              Initiate Sync
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelViewer