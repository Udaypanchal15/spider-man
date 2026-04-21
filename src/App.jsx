import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useMemo } from 'react'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import StorySection from './components/ui/StorySection'
import SuitTechSection from './components/ui/SuitTechSection'
import ModelViewer from './components/ui/ModelViewer'
import GallerySection from './components/ui/GallerySection'
import Footer from './components/ui/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import WebCursor from './components/ui/WebCursor'
import EasterEggs from './components/ui/EasterEggs'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
      )
    }, mainRef)

    return () => {
      lenis.destroy()
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = () => {
      setShowCursor(true)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#0a0a0f]">
      <LoadingScreen />

      {showCursor && <WebCursor />}
      <EasterEggs />

      <div className="fixed inset-0 z-0 group">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0508] via-[#0a0510] to-[#050508]" />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#0a0a0f]/80 backdrop-blur px-6 py-3 border border-[#E62429]/50">
            <p className="font-label text-sm text-[#E62429] tracking-[0.3em]">MODEL NOT AVAILABLE</p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StorySection />
        <SuitTechSection />
        <ModelViewer />
        <GallerySection />
        <Footer />
      </div>
    </div>
  )
}

export default App