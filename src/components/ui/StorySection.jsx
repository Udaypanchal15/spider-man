import React from 'react'

function StorySection() {
  return (
    <section id="story" className="py-24 bg-[#0e0e12]/90 relative z-10 border-t border-[#E62429]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-white">
              THE DIRECTIVE
            </h2>
            <div className="h-1 w-24 bg-[#E62429] mt-4" />
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-[#A4C8FF] font-headline text-sm font-bold tracking-wider hover:text-white transition-colors"
            href="#"
          >
            FULL REPORT
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          <div className="md:col-span-2 md:row-span-2 bg-[#1a1a1f] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent z-10" />
            <img 
              src="/images/download1.jpg" 
              alt="Spider-Man tactical"
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="bg-[#E62429]/20 backdrop-blur-sm text-[#FFDAD6] text-xs font-bold px-3 py-1 mb-4 inline-block font-label">
                FILE: 042-A
              </div>
              <h3 className="font-headline text-3xl font-bold text-white mb-2">
                A SHIFT IN POWER
              </h3>
              <p className="font-body text-[#E7BDB8] max-w-md">
                The underworld has evolved. Standard tactics are obsolete. A new syndicate demands a complete overhaul of our approach.
              </p>
            </div>
          </div>

          <div className="bg-[#1c1c20] p-8 flex flex-col justify-between group hover:bg-[#252530] transition-colors border-l-2 border-[#A4C8FF] relative overflow-hidden">
            <img 
              src="/images/spider-man-suitupgrade.png" 
              alt="Suit Upgrade"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            />
            <span className="material-symbols-outlined text-[#A4C8FF] text-3xl mb-4">memory</span>
            <div>
              <h4 className="font-headline text-xl font-bold text-white mb-2">SUIT UPGRADE</h4>
              <p className="font-body text-sm text-[#A4C8FF]">
                Integration of nano-weave tech for enhanced kinetic absorption.
              </p>
            </div>
          </div>

          <div className="bg-[#1c1c20] p-8 flex flex-col justify-between group hover:bg-[#252530] transition-colors border-l-2 border-[#E62429] relative overflow-hidden">
            <img 
              src="/images/spider-threat.jpg" 
              alt="Threat Detection"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            />
            <span className="material-symbols-outlined text-[#E62429] text-3xl mb-4">radar</span>
            <div>
              <h4 className="font-headline text-xl font-bold text-white mb-2">THREAT DETECTION</h4>
              <p className="font-body text-sm text-[#A4C8FF]">
                Advanced HUD overlays provide predictive combat analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection