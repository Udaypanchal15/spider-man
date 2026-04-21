import React, { useEffect, useRef } from 'react'

function WebCursor() {
  const cursorRef = useRef(null)
  const positionRef = useRef({ x: -100, y: -100 })
  const targetRef = useRef({ x: -100, y: -100 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const lastPosRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)
  const isHoveringRef = useRef(false)
  const linesRef = useRef([])
  const webLinesRef = useRef([])

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'spider-cursor'
    cursor.innerHTML = `
      <svg width="32" height="32" viewBox="0 0 32 32" class="cursor-svg">
        <defs>
          <filter id="glow-primary">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-secondary">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="16" cy="16" r="3" fill="#E62429" filter="url(#glow-primary)"/>
        <circle cx="16" cy="16" r="2" fill="#ffffff"/>
        <g stroke="#E62429" stroke-width="1.2" filter="url(#glow-secondary)">
          <line x1="16" y1="3" x2="16" y2="8"/>
          <line x1="16" y1="24" x2="16" y2="29"/>
          <line x1="3" y1="16" x2="8" y2="16"/>
          <line x1="24" y1="16" x2="29" y2="16"/>
        </g>
        <g stroke="#A4C8FF" stroke-width="1">
          <line x1="7" y1="7" x2="10" y2="10"/>
          <line x1="22" y1="22" x2="25" y2="25"/>
          <line x1="22" y1="7" x2="25" y2="10"/>
          <line x1="7" y1="22" x2="10" y2="25"/>
        </g>
      </svg>
    `
    cursor.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      will-change: transform, top, left;
      mix-blend-mode: screen;
    `
    document.body.appendChild(cursor)
    cursorRef.current = cursor

    const updateCursorStyle = (isHovering, isClicking = false) => {
      const scale = isClicking ? 0.8 : (isHovering ? 1.4 : 1)
      const rotate = isHovering ? '45deg' : '0deg'
      cursor.style.transition = 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
      cursor.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotate})`
      
      const svg = cursor.querySelector('svg')
      if (svg) {
        const mainColor = isHovering ? '#E62429' : '#A4C8FF'
        const accentColor = isHovering ? '#ffffff' : '#E62429'
        svg.querySelectorAll('circle').forEach(c => {
          if (c.getAttribute('r') === '3') c.setAttribute('fill', mainColor)
        })
      }
    }

    const lerp = (start, end, factor) => start + (end - start) * factor

    const drawWebLine = (startX, startY, endX, endY) => {
      const line = document.createElement('div')
      line.className = 'web-line'
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
      const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
      
      line.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: ${length}px;
        height: 1px;
        background: linear-gradient(90deg, rgba(164, 200, 255, 0.6), rgba(230, 36, 41, 0.3));
        transform-origin: left center;
        transform: rotate(${angle}deg);
        pointer-events: none;
        z-index: 99998;
        box-shadow: 0 0 4px rgba(164, 200, 255, 0.3);
      `
      document.body.appendChild(line)
      linesRef.current.push(line)
      
      setTimeout(() => {
        line.style.transition = 'opacity 0.5s ease-out, width 0.3s ease-out'
        line.style.opacity = '0'
        line.style.width = '0px'
      }, 50)
      
      setTimeout(() => line.remove(), 600)
      linesRef.current = linesRef.current.filter(l => l.parentNode).slice(-8)
    }

    const createClickWeb = (x, y) => {
      const webContainer = document.createElement('div')
      webContainer.className = 'click-web-burst'
      webContainer.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 99997;
      `
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * 360
        const line = document.createElement('div')
        const isLong = i % 2 === 0
        line.style.cssText = `
          position: absolute;
          width: ${isLong ? '40px' : '25px'};
          height: 2px;
          background: linear-gradient(${angle % 45 === 0 ? '90deg' : '90deg'}, rgba(230, 36, 41, 0.8), transparent);
          transform-origin: center;
          transform: rotate(${angle}deg) translateX(0);
          border-radius: 1px;
          box-shadow: 0 0 ${isLong ? '8px' : '4px'} rgba(230, 36, 41, ${isLong ? 0.6 : 0.3});
        `
        webContainer.appendChild(line)
      }
      
      const centerDot = document.createElement('div')
      centerDot.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: #E62429;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 15px #E62429, 0 0 30px rgba(230, 36, 41, 0.5);
      `
      webContainer.appendChild(centerDot)
      
      document.body.appendChild(webContainer)
      webLinesRef.current.push(webContainer)
      
      webContainer.style.transition = 'transform 0.15s ease-out, opacity 0.3s ease-out'
      webContainer.style.transform = 'translate(-50%, -50%) scale(1.5)'
      webContainer.style.opacity = '0'
      
      setTimeout(() => webContainer.remove(), 400)
      webLinesRef.current = webLinesRef.current.filter(w => w.parentNode).slice(-4)
    }

    const animate = () => {
      const dx = targetRef.current.x - positionRef.current.x
      const dy = targetRef.current.y - positionRef.current.y
      
      velocityRef.current.x = dx * 0.12
      velocityRef.current.y = dy * 0.12
      
      positionRef.current.x = positionRef.current.x + velocityRef.current.x
      positionRef.current.y = positionRef.current.y + velocityRef.current.y
      
      if (cursor) {
        cursor.style.left = `${positionRef.current.x}px`
        cursor.style.top = `${positionRef.current.y}px`
      }
      
      frameRef.current++
      
      const speed = Math.sqrt(velocityRef.current.x ** 2 + velocityRef.current.y ** 2)
      if (frameRef.current % 4 === 0 && speed > 2) {
        drawWebLine(
          lastPosRef.current.x,
          lastPosRef.current.y,
          positionRef.current.x,
          positionRef.current.y
        )
      }
      
      lastPosRef.current = { x: positionRef.current.x, y: positionRef.current.y }
      
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('group')
      
      if (isInteractive) {
        isHoveringRef.current = true
        updateCursorStyle(true, false)
        document.body.style.cursor = 'none'
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('group')
      
      if (isInteractive) {
        isHoveringRef.current = false
        updateCursorStyle(false, false)
      }
    }

    const handleMouseDown = () => {
      if (isHoveringRef.current) {
        updateCursorStyle(true, true)
      }
    }

    const handleMouseUp = () => {
      if (isHoveringRef.current) {
        updateCursorStyle(true, false)
      }
    }

    const handleClick = (e) => {
      createClickWeb(e.clientX, e.clientY)
    }

    document.body.style.cursor = 'none'
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('click', handleClick)

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('click', handleClick)
      cursor.remove()
      linesRef.current.forEach(l => l.remove())
      webLinesRef.current.forEach(w => w.remove())
      document.body.style.cursor = 'auto'
    }
  }, [])

  return null
}

export default WebCursor