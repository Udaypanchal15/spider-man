import React from 'react'

function GallerySection() {
  const galleryItems = [
    {
      title: 'KINETIC STRIKE',
      subtitle: 'Combat Analysis',
      image: '/images/7cd9ade534d37e70a74fbc195a71b3bd.jpg',
    },
    {
      title: 'TACTICAL VIEW',
      subtitle: 'Suit Schematic',
      image: '/images/747046aabfae88ab84371a9275064b64.jpg',
    },
    {
      title: 'URBAN RECON',
      subtitle: 'Night Patrol',
      image: '/images/97493c783194ee8b05b9e19714186a10.jpg',
    },
    {
      title: 'SYSTEMS ONLINE',
      subtitle: 'Protocol Active',
      image: '/images/e4b40c91f92708cda28426c573818b50.jpg',
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-surface-container-lowest relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase text-white">
              ARCHIVES
            </h2>
            <div className="h-1 w-24 bg-primary-container mt-4" />
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-secondary font-headline text-sm font-bold tracking-wider hover:text-white transition-colors"
            href="#"
          >
            ACCESS DATABASE
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] bg-surface-container overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-80" />
              <div className="absolute inset-0 border border-transparent group-hover:border-primary-container/50 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-primary-container/20 backdrop-blur-sm text-primary-fixed text-[10px] font-bold px-2 py-1 mb-2 inline-block font-label uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-primary-container">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection