import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        delay: 0.5
      })

      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 1.5 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
      >
        <source src="/hero-cinematic.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1a]/50 via-[#060c1a]/30 to-[#060c1a]/70 pointer-events-none z-10" />

      <div className="absolute inset-0 opacity-20 pointer-events-none z-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzAsIDM2LCA0MSwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
      </div>

      <div ref={contentRef} className="relative z-20 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        <div className="hero-content flex flex-col items-start gap-6 max-w-2xl">
          <div className="bg-[#2a2a2a]/80 backdrop-blur-sm px-4 py-1 text-[#FFDAD6] text-xs font-bold font-headline tracking-widest uppercase border-l-2 border-[#E62429]">
            PROTOCOL INITIATED
          </div>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-white">
            THE CITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E62429] via-[#ff4d52] to-[#E62429] bg-[length:200%_auto] animate-pulse">
              NEEDS A HERO.
            </span>
          </h1>

          <p className="font-body text-base md:text-lg text-[#A4C8FF]/80 max-w-lg leading-relaxed">
            A new era demands a new approach. Experience the next evolution of kinetic combat 
            and high-altitude traversal in the most advanced tactical suit ever developed.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#E62429] text-white font-headline uppercase font-bold text-sm px-8 py-4 tracking-wider hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300 relative group overflow-hidden cursor-pointer">
              <span className="relative z-10">INITIATE SEQUENCE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <button className="bg-[#2a2a2a]/80 backdrop-blur-sm text-white font-headline uppercase font-bold text-sm px-8 py-4 tracking-wider hover:bg-[#353535] transition-colors border border-[#A4C8FF]/20 cursor-pointer">
              VIEW INTEL
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E62429] rounded-full animate-pulse" />
              <span className="font-label text-xs text-[#A4C8FF]/70 tracking-widest uppercase">LIVE TRACKING</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00cfff] rounded-full animate-pulse" />
              <span className="font-label text-xs text-[#00cfff] tracking-widest uppercase">SYSTEMS OPTIMAL</span>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E62429]/10 via-transparent to-[#A4C8FF]/10 blur-3xl" />

          <div className="absolute top-4 right-4 bg-[#353535]/60 backdrop-blur-md px-4 py-2 border-l-2 border-[#A4C8FF] font-label text-[10px] text-[#001C3A] tracking-wider">
            <div>SYS.OP: OPTIMAL</div>
            <div>VELOCITY: 84m/s</div>
          </div>

          <div className="absolute bottom-16 left-0 bg-[#353535]/60 backdrop-blur-md px-4 py-2 border-l-2 border-[#E62429] font-label text-[10px] text-[#410003] tracking-wider">
            <div>THREAT LEVEL: OMEGA</div>
            <div>TARGET: ACQUIRED</div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#E62429]/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#A4C8FF]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="material-symbols-outlined text-[#A4C8FF]/50 animate-bounce">keyboard_arrow_down</span>
        <span className="font-label text-[10px] text-[#A4C8FF]/30 tracking-widest uppercase">SCROLL TO EXPLORE</span>
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#A4C8FF]/30 to-transparent" />
        <div className="font-label text-[10px] text-[#A4C8FF]/30 tracking-widest -rotate-90 origin-center whitespace-nowrap">
          SPIDER-MAN PROTOCOL
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#A4C8FF]/30 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#E62429]/30 to-transparent" />
        <div className="font-label text-[10px] text-[#A4C8FF]/30 tracking-widest rotate-90 origin-center whitespace-nowrap">
          STARK INDUSTRIES
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#E62429]/30 to-transparent" />
      </div>
    </section>
  )
}

export default Hero