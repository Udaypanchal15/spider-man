import React, { useState, useEffect } from 'react'

function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [statusText, setStatusText] = useState('INITIALIZING...')

  useEffect(() => {
    const statusMessages = [
      'INITIALIZING...',
      'LOADING ASSETS...',
      'CALIBRATING SYSTEMS...',
      'ESTABLISHING SECURE CONNECTION...',
      'ACCESSING DATABASE...',
      'ALMOST READY...'
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 800)
          return 100
        }
        
        if (prev > 15 && currentIndex < 1) currentIndex = 1
        if (prev > 30 && currentIndex < 2) currentIndex = 2
        if (prev > 50 && currentIndex < 3) currentIndex = 3
        if (prev > 70 && currentIndex < 4) currentIndex = 4
        if (prev > 85 && currentIndex < 5) currentIndex = 5
        
        setStatusText(statusMessages[currentIndex])
        
        return prev + Math.random() * 12
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,36,41,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 text-center">
        <div className="font-headline text-4xl md:text-6xl lg:text-8xl font-black italic tracking-tighter text-primary-container mb-1 glitch-text" data-text="BRAND NEW DAY">
          BRAND NEW DAY
        </div>
        <div className="font-label text-xs tracking-[0.4em] text-secondary uppercase mb-12">
          {statusText}
        </div>

        <div className="w-80 md:w-96 h-1 bg-surface-container-highest relative overflow-hidden mx-auto mb-4">
          <div
            className="h-full hero-gradient absolute top-0 left-0 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="font-label text-xs text-secondary/60">
            {Math.min(Math.round(progress), 100)}%
          </div>
          <div className="w-24 h-px bg-surface-container-highest" />
          <div className="font-label text-xs text-primary-container font-bold tracking-widest">
            {progress >= 100 ? 'ACCESS GRANTED' : 'SECURE CONNECTION'}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex gap-1 items-end">
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-1 bg-primary-container"
              style={{
                animation: `scanline 1s infinite ease-in-out`,
                animationDelay: `${i * 0.15}s`,
                height: `${12 + i * 6}px`
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-8 left-8 font-label text-[10px] text-secondary/30 tracking-[0.3em]">
        <div>SPIDER-MAN PROTOCOL v6.2</div>
        <div className="mt-1">STARK INDUSTRIES</div>
      </div>

      <div className="absolute top-8 right-8 font-label text-[10px] text-secondary/30 tracking-[0.3em] text-right">
        <div className="flex items-center justify-end gap-2">
          <span className="w-2 h-2 bg-primary-container animate-pulse" />
          LIVE
        </div>
        <div className="mt-1">ENCRYPTED CONNECTION</div>
      </div>
    </div>
  )
}

export default LoadingScreen