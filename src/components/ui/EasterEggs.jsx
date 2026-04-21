import React, { useState, useEffect, useRef } from 'react'

function EasterEggs() {
  const [secretMessages, setSecretMessages] = useState([])
  const [webPattern, setWebPattern] = useState(false)
  const keyBufferRef = useRef([])
  const konamiSequence = 'sss'

  const easterEggs = {
    UNCLENCH: { keys: 'fu', name: 'UNCLENCH FISTS', message: 'WITH GREAT POWER COMES GREAT RESPONSIBILITY', color: '#E62429' },
    WEB_WING: { keys: 'web', name: 'WEB WING', message: 'SOAR THROUGH THE SKY', color: '#A4C8FF' },
    SPIDEY: { keys: 'spider', name: 'SPIDEY SENSE', message: '⚡ SPIDER SENSE TINGLING ⚡', color: '#82CFFF' },
    MARY_JANE: { keys: 'mj', name: 'MARY JANE', message: 'MISSING: MARY JANE WATSON', color: '#E62429' },
    GWEN: { keys: 'gw', name: 'GWEN STACY', message: 'I WILL SAVE GWEN. I WILL SAVE HER.', color: '#A4C8FF' },
    OSCORP: { keys: 'os', name: 'OSCORP', message: 'OSBORN INDUSTRIES - EMPLOYEE PORTAL', color: '#A4C8FF' },
    STARK: { keys: 'tony', name: 'TONY STARK', message: 'PROTECT GEORGE STACY. HE IS THE KEY.', color: '#A4C8FF' },
    BEN: { keys: 'ben', name: 'BEN PARKER', message: 'WITH GREAT POWER...', color: '#E62429' },
    GOBLIN: { keys: 'goblin', name: 'GREEN GOBLIN', message: 'RISE, MY SON. RISE!', color: '#A4C8FF' },
    OCTAVIUS: { keys: 'oct', name: 'DOC OCK', message: 'THE POWER OF THE SUN IN THE PALM OF MY HAND', color: '#A4C8FF' },
    VULTURE: { keys: 'vulture', name: 'VULTURE', message: 'I AM NOT WHAT I AM', color: '#A4C8FF' },
    RHINO: { keys: 'rhino', name: 'RHINO', message: 'LIKE A BULL!', color: '#A4C8FF' },
    ELECTRO: { keys: 'electro', name: 'ELECTRO', message: 'I AM THE TRUE SPIDER!', color: '#A4C8FF' },
    SANDMAN: { keys: 'sand', name: 'SANDMAN', message: 'I AM SANDMAN?', color: '#A4C8FF' },
    LIZARD: { keys: 'lizard', name: 'THE LIZARD', message: 'THE LIZARD PREVAILS!', color: '#A4C8FF' },
    MYSTERIO: { keys: 'mysterio', name: 'MYSTERIO', message: 'TRUST NO ONE', color: '#A4C8FF' }
  }

  const showMessage = (msg, color) => {
    const id = Date.now()
    setSecretMessages(prev => [...prev.slice(-2), { id, text: msg, color }])
    setTimeout(() => {
      setSecretMessages(prev => prev.filter(m => m.id !== id))
    }, 3000)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key

      if (key === 'Escape') {
        setWebPattern(false)
        document.body.style.background = ''
        return
      }

      if (key.length === 1 || key.startsWith('Arrow')) {
        const keyValue = key.startsWith('Arrow') ? key : key.toLowerCase()
        keyBufferRef.current.push(keyValue)
        
        if (keyBufferRef.current.length > 20) {
          keyBufferRef.current = keyBufferRef.current.slice(-20)
        }

        const bufferString = keyBufferRef.current.join('')

        if (bufferString.endsWith(konamiSequence.toLowerCase())) {
          setWebPattern(true)
          showMessage('🌐 SPIDER SENSE ACTIVATED 🌐', '#E62429')
        }

        Object.values(easterEggs).forEach(egg => {
          if (bufferString.endsWith(egg.keys)) {
            showMessage(egg.message, egg.color)
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (webPattern) {
      document.body.style.background = 'radial-gradient(circle, #1a0a0a 0%, #0a0505 100%)'
    } else {
      document.body.style.background = ''
    }
  }, [webPattern])

  return (
    <>
      {secretMessages.map((msg) => (
        <div
          key={msg.id}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]"
          style={{
            padding: '16px 32px',
            background: 'rgba(0,0,0,0.95)',
            border: `2px solid ${msg.color}`,
            color: msg.color,
            fontFamily: 'system-ui',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            animation: 'fadeInOut 3s ease-in-out forwards',
            backdropFilter: 'blur(10px)'
          }}
        >
          {msg.text}
        </div>
      ))}

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </>
  )
}

export default EasterEggs