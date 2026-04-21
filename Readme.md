# Spider-Man Experience

An immersive 3D Spider-Man website built with React, Three.js, and GSAP.

## Features

- 🎬 Full-screen cinematic video background
- 🕷️ 3D Spider-Man model with animations
- 🔍 Interactive suit tech schematics with hotspots
- 📸 Image gallery with hover effects
- 🎮 Easter eggs (type codes to discover!)
- 🖱️ Custom spider-web cursor
- ✨ Smooth scrolling with Lenis
- 🎨 GSAP animations

## Easter Eggs

Type these codes on your keyboard:

| Code       | Name           | Message                                     |
| ---------- | -------------- | ------------------------------------------- |
| `fu`       | UNCLENCH FISTS | WITH GREAT POWER COMES GREAT RESPONSIBILITY |
| `web`      | WEB WING       | SOAR THROUGH THE SKY                        |
| `spider`   | SPIDEY SENSE   | ⚡ SPIDER SENSE TINGLING ⚡                 |
| `mj`       | MARY JANE      | MISSING: MARY JANE WATSON                   |
| `gw`       | GWEN STACY     | I WILL SAVE GWEN. I WILL SAVE HER.          |
| `os`       | OSCORP         | OSBORN INDUSTRIES - EMPLOYEE PORTAL         |
| `tony`     | TONY STARK     | PROTECT GEORGE STACY. HE IS THE KEY.        |
| `ben`      | BEN PARKER     | WITH GREAT POWER...                         |
| `goblin`   | GREEN GOBLIN   | RISE, MY SON. RISE!                         |
| `oct`      | DOC OCK        | THE POWER OF THE SUN IN THE PALM OF MY HAND |
| `vulture`  | VULTURE        | I AM NOT WHAT I AM                          |
| `rhino`    | RHINO          | LIKE A BULL!                                |
| `electro`  | ELECTRO        | I AM THE TRUE SPIDER!                       |
| `sand`     | SANDMAN        | I AM SANDMAN?                               |
| `lizard`   | THE LIZARD     | THE LIZARD PREVAILS!                        |
| `mysterio` | MYSTERIO       | TRUST NO ONE                                |

Special: Type `sss` quickly for SPIDER SENSE mode!

## Tech Stack

- **React 18** + Vite
- **Three.js** / React-Three-Fiber / Drei
- **Tailwind CSS**
- **GSAP** (animations)
- **Lenis** (smooth scroll)
- **@react-three/postprocessing**

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Udaypanchal15/spider-man.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
spider-man/
├── public/
│   ├── images/         # Image assets
│   ├── favicon.svg    # Site favicon
│   └── hero-cinematic.mp4
├── src/
│   ├── components/
│   │   ├── three/    # 3D components
│   │   └── ui/       # UI components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

Built with 🕷️ by Uday Panchal
