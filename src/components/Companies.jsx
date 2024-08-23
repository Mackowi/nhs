const images = [
  {
    path: 'company1.png',
    url: 'https://objectfirst.com/',
  },
  {
    path: 'company2.png',
    url: 'https://www.silicom-usa.com/',
  },
  {
    path: 'company3.png',
    url: 'https://www.seagate.com/',
  },
  {
    path: 'company4.png',
    url: 'https://nebul.com/',
  },
  {
    path: 'company5.png',
    url: 'https://kaytus.com/',
  },
]

function Companies() {
  return (
    <div className='container mx-auto py-12'>
      <div className='hidden md:flex bg-blue text-white text-center py-2 rounded-2xl mb-2'>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>Server</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>Storage</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>Networking</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>AI</h4>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-0'>
        <div className='flex flex-col w-4/5 md:w-1/4 companiesLogoBorder md:border-none'>
          <h4 className='bg-blue text-white text-center md:hidden block py-1 rounded-t-xl'>
            Server
          </h4>
          <div className='flex flex-col'></div>
          <a href={images[4].url} className='mx-auto '>
            <img key={`Kaytus`} src={images[4].path} alt={`Logo Kaytus`} />
          </a>
        </div>
        <div className='flex flex-col w-4/5 md:w-1/4 companiesLogoBorder md:border-none'>
          <h3 className='bg-blue text-white text-center md:hidden block rounded-t-xl py-1'>
            Storage
          </h3>
          <div className='flex flex-col'>
            <a href={images[2].url} className='mx-auto'>
              <img key={`Seagate`} src={images[2].path} alt={`Logo Seagate`} />
            </a>
            <a href={images[0].url} className='mx-auto'>
              <img
                key={`Object First`}
                src={images[0].path}
                alt={`Logo Object First`}
              />
            </a>
          </div>
        </div>
        <div className='flex flex-col w-4/5 md:w-1/4 companiesLogoBorder md:border-none'>
          <h4 className='bg-blue text-white text-center md:hidden block rounded-t-xl py-1'>
            Networking
          </h4>
          <div className='flex flex-col'>
            <a href={images[1].url} className='mx-auto'>
              <img key={`Silicom`} src={images[1].path} alt={`Logo Silicom`} />
            </a>
          </div>
        </div>
        <div className='flex flex-col w-4/5 md:w-1/4 companiesLogoBorder md:border-none'>
          <h4 className='bg-blue text-white text-center md:hidden block rounded-t-xl py-1'>
            AI
          </h4>
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
