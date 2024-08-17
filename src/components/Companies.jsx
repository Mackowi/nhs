const images = [
  {
    path: 'slider1.png',
    url: 'https://objectfirst.com/',
  },
  {
    path: 'slider2.png',
    url: 'https://www.silicom-usa.com/',
  },
  {
    path: 'slider3.png',
    url: 'https://www.seagate.com/',
  },
  {
    path: 'slider4.png',
    url: 'https://nebul.com/',
  },
]

function Companies() {
  return (
    <div className='container mx-auto pt-12 md:pt-8'>
      <div className='flex flex-col md:flex-row items-center'>
        {images.map((img, index) => (
          <a href={img.url} className='mx-auto w-3/4 md:w-1/4'>
            <img key={index} src={img.path} alt={`Image${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  )
}
export default Companies
