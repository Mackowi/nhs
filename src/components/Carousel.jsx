const images = [
  'slider1.png',
  'slider2.png',
  'slider3.png',
  'slider1.png',
  'slider2.png',
  'slider3.png',
  'slider1.png',
  'slider2.png',
  'slider3.png',
]

const Carousel = () => {
  return (
    <div className='overflow-hidden relative w-full container mx-auto'>
      <div className='flex animate-scroll'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image${index + 1}`}
            className='h-64 w-54 flex-shrink-0'
            // className='w-full h-64 w-40 flex-shrink-0'
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
