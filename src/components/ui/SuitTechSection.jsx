import React, { useState } from 'react'

function SuitTechSection() {
  const [activeHotspot, setActiveHotspot] = useState(null)

  const stats = [
    { label: 'AGILITY INDEX', value: 98, color: '#E62429' },
    { label: 'DURABILITY RATING', value: 85, color: '#82CFFF' },
    { label: 'POWER RESERVE', value: 72, color: '#A4C8FF' },
  ]

  const protocols = ['Stealth Mode', 'Thermal Vision', 'Web-Shooter Overclock', 'Combat Stance']

  const hotspots = [
    { 
      id: 'nano', 
      x: '25%', y: '30%',
      title: 'NANO-WEAVE MESH', 
      desc: 'High-tensile carbon-nanotube weave providing level 4 ballistic protection without compromising agility.' 
    },
    { 
      id: 'kinetic', 
      x: '75%', y: '45%',
      title: 'KINETIC ABSORPTION', 
      desc: 'Impact-reactive fluid dynamics layer converting physical trauma into stored electrostatic energy.' 
    },
    { 
      id: 'hud', 
      x: '50%', y: '65%',
      title: 'HUD INTEGRATION', 
      desc: 'Optical neural-link interface offering real-time tactical analysis and environmental scanning.' 
    },
  ]

  return (
    <section id="suits" className="py-24 bg-surface relative grid-pattern">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-white">
              SUIT TECH
            </h2>
            <div className="h-1 w-24 bg-secondary mt-4" />
          </div>
          <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 border-l-2 border-secondary">
            <span className="material-symbols-outlined text-secondary text-sm animate-pulse">radio_button_checked</span>
            <span className="font-headline text-xs font-bold tracking-[0.2em] text-secondary">MARK IV ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative min-h-[500px] bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-center overflow-hidden">
            <img 
              src="./images/spider-man-suitupgrade.png" 
              alt="Spider-Man Suit Upgrade Schematic"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

            <div className="absolute top-8 left-8 z-10">
              <h3 className="font-headline text-4xl font-black text-on-surface uppercase tracking-tighter leading-none mix-blend-difference">
                ADVANCED<br />SUIT TECH
              </h3>
              <p className="font-body text-secondary mt-2 text-sm uppercase tracking-widest">
                Mark IV - Kinetic Dispersal System
              </p>
            </div>

            {hotspots.map((spot) => (
              <div 
                key={spot.id}
                className="absolute"
                style={{ left: spot.x, top: spot.y, transform: 'translate(-50%, -50%)' }}
              >
                <button
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="w-4 h-4 bg-primary-container relative z-10 transition-all duration-300 hover:scale-150"
                >
                  <span className="absolute inset-0 bg-primary-container animate-ping opacity-50" />
                </button>
                <div 
                  className={`absolute top-4 w-56 glass-panel p-4 transition-all duration-300 ${
                    activeHotspot === spot.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={spot.x > '50%' ? { right: 0 } : { left: 0 }}
                >
                  <h4 className="font-headline text-primary-container uppercase font-bold text-sm">{spot.title}</h4>
                  <p className="font-body text-xs text-on-surface mt-1">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-high p-6 border-t-4 border-primary-container relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <span className="material-symbols-outlined text-6xl">bolt</span>
              </div>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface mb-6">
                System Performance
              </h3>

              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-body text-xs uppercase tracking-widest text-secondary mb-2">
                      <span>{stat.label}</span>
                      <span className="font-bold" style={{ color: stat.color }}>{stat.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full transition-all duration-1000"
                        style={{
                          width: `${stat.value}%`,
                          background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}dd 100%)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container p-6 border border-outline-variant/20">
              <h4 className="font-headline text-sm font-bold uppercase text-secondary mb-4">Active Protocols</h4>
              <div className="flex flex-wrap gap-2">
                {protocols.map((protocol, i) => (
                  <span
                    key={i}
                    className={`font-body text-[10px] uppercase tracking-widest px-3 py-1 cursor-pointer transition-colors ${
                      i === 0
                        ? 'bg-tertiary-container text-on-tertiary-container'
                        : 'bg-surface-container-highest text-secondary border border-secondary/30 hover:border-secondary'
                    }`}
                  >
                    {protocol}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest py-4 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300">
              DEPLOY SUIT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuitTechSection