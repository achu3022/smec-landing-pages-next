import Image from 'next/image'

const siteImages = [
  { src: '/site/1.webp', alt: 'SMECLabs Kochi training lab with industrial automation equipment' },
  { src: '/site/2.webp', alt: 'SMECLabs Kochi classroom and learning environment' },
  { src: '/site/3.webp', alt: 'SMECLabs Kochi institute facilities overview' },
]

export default function SiteGallery() {
  return (
    <section id="about" className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Our <span className="text-[#00E5FF]">Facilities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
