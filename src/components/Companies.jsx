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
    <div className='container mx-auto p-12 md:pt-8'>
      {/* <div className='flex flex-col md:flex-row items-center'>
        {images.map((img, index) => (
          <a href={img.url} className='mx-auto w-3/4 md:w-1/4'>
            <img key={index} src={img.path} alt={`Image${index + 1}`} />
          </a>
        ))}
      </div> */}
      <div className='hidden md:flex bg-darkBlue text-white text-center py-8 rounded-2xl mb-8'>
        <div className='w-4/5 md:w-1/3'>
          <h4>Buraki</h4>
        </div>
        <div className='w-4/5 md:w-1/3'>
          <h4>Ziemniaki</h4>
        </div>
        <div className='w-4/5 md:w-1/3'>
          <h4>Znicze</h4>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <div className='flex flex-col w-4/5 md:w-1/3 md:border-r-2 md:border-darkBlue mb-12'>
          <h3 className='bg-darkBlue text-white text-center md:hidden block rounded-2xl mb-6 py-2'>
            Buraki
          </h3>
          <div className='flex flex-col'></div>
          <a href={images[0].url} className='mx-auto '>
            <img
              key={`Object First`}
              src={images[0].path}
              alt={`Logo Object First`}
            />
          </a>
          <a href={images[2].url} className='mx-auto'>
            <img key={`Seagate`} src={images[2].path} alt={`Logo Seagate`} />
          </a>
        </div>
        <div className='flex flex-col w-4/5 md:w-1/3 md:border-r-2 md:border-darkBlue'>
          <h3 className='bg-darkBlue text-white text-center md:hidden block rounded-2xl mb-6 py-2'>
            Ziemniaki
          </h3>
          <div className='flex flex-col'>
            <a href={images[1].url} className='mx-auto'>
              <img key={`Silicom`} src={images[1].path} alt={`Logo Silicom`} />
            </a>
          </div>
        </div>
        <div className='flex flex-col w-4/5 md:w-1/3 '>
          <h3 className='bg-darkBlue text-white text-center md:hidden block rounded-2xl mb-6 py-2'>
            Znicze
          </h3>
          <div className='flex flex-col'>
            <a href={images[3].url} className='mx-auto'>
              <img key={`Nebul`} src={images[3].path} alt={`Logo Nebul`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Companies
