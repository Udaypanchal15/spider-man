# Spider-Man Experience Website

## Stack
- React 18 + Vite
- Three.js / React-Three-Fiber / Drei
- Tailwind CSS
- GSAP (animations)
- Lenis (smooth scroll)
- @react-three/postprocessing (Bloom, Vignette)

## Project Structure
```
src/
├── App.jsx              # Main app, Canvas background, sections
├── main.jsx            # Entry point
├── index.css           # Tailwind + custom animations
└── components/
    ├── three/
    │   ├── Scene.jsx       # 3D scene with Spider-Man, lights, effects
    │   ├── SpiderMan.jsx    # Procedural 3D Spider-Man figure
    │   ├── WebParticles.jsx # Web particle system
    │   └── CityEnvironment.jsx
    └── ui/
        ├── Hero.jsx            # Video background + content
        ├── StorySection.jsx   # Story cards
        ├── SuitTechSection.jsx # Interactive hotspots
        ├── ModelViewer.jsx     # 3D model display section
        ├── GallerySection.jsx  # Image gallery
        ├── Navbar.jsx          # Navigation
        ├── Footer.jsx          # Footer
        ├── WebCursor.jsx       # Custom cursor with web trails
        ├── EasterEggs.jsx      # Keyboard easter eggs
        └── LoadingScreen.jsx   # Loading overlay
```

## Run
```bash
npm run dev
```

## Sections (in order)
1. **Hero** - Full-screen video background, main CTA
2. **Story** - Narrative cards with images
3. **Suit Tech** - Interactive suit schematic with hotpots
4. **Model** - 3D Spider-Man 2099 viewer (procedural geometry)
5. **Gallery** - Image grid

## Features
- Custom spider-web cursor with click effects
- Smooth scroll with Lenis
- GSAP animations on hero load

## Easter Eggs
Type these codes on the keyboard to trigger secret messages:

| Code | Name | Message |
|------|------|--------|
| `fu` | UNCLENCH FISTS | WITH GREAT POWER COMES GREAT RESPONSIBILITY |
| `web` | WEB WING | SOAR THROUGH THE SKY |
| `spider` | SPIDEY SENSE | ⚡ SPIDER SENSE TINGLING ⚡ |
| `mj` | MARY JANE | MISSING: MARY JANE WATSON |
| `gw` | GWEN STACY | I WILL SAVE GWEN. I WILL SAVE HER. |
| `os` | OSCORP | OSBORN INDUSTRIES - EMPLOYEE PORTAL |
| `tony` | TONY STARK | PROTECT GEORGE STACY. HE IS THE KEY. |
| `ben` | BEN PARKER | WITH GREAT POWER... |
| `goblin` | GREEN GOBLIN | RISE, MY SON. RISE! |
| `oct` | DOC OCK | THE POWER OF THE SUN IN THE PALM OF MY HAND |
| `vulture` | VULTURE | I AM NOT WHAT I AM |
| `rhino` | RHINO | LIKE A BULL! |
| `electro` | ELECTRO | I AM THE TRUE SPIDER! |
| `sand` | SANDMAN | I AM SANDMAN? |
| `lizard` | THE LIZARD | THE LIZARD PREVAILS! |
| `mysterio` | MYSTERIO | TRUST NO ONE |

### Special Combos
- **Spider Sense** (`sss`) - Activates SPIDER SENSE mode with web pattern effect
- **Escape** - Clears web pattern mode