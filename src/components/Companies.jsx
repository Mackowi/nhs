const images = [
  {
    path: '../company1.png',
    url: 'https://objectfirst.com/',
  },
  {
    path: '../company2.png',
    url: 'https://www.silicom-usa.com/',
  },
  {
    path: '../company3.png',
    url: 'https://www.seagate.com/',
  },
  {
    path: '../company4.png',
    url: 'https://nebul.com/',
  },
  {
    path: '../company5.png',
    url: 'https://kaytus.com/',
  },
]

function Companies({ currentLocale, textContent }) {
  return (
    <div className='container mx-auto py-12'>
      <div className='hidden lg:flex bg-blue text-white text-center py-2 rounded-2xl mb-2 items-center'>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>{textContent[`${currentLocale}`].homepage.companies[1]}</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>{textContent[`${currentLocale}`].homepage.companies[2]}</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>{textContent[`${currentLocale}`].homepage.companies[3]}</h4>
        </div>
        <div className='w-4/5 md:w-1/4 border-r-2'>
          <h4>{textContent[`${currentLocale}`].homepage.companies[4]}</h4>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-0'>
        <div className='flex flex-col w-4/5 lg:w-1/4 companiesLogoBorder lg:border-none'>
          <h4 className='bg-blue text-white text-center lg:hidden block py-1 rounded-t-xl'>
            Server
          </h4>
          <div className='flex flex-col'></div>
          <a href={images[4].url} className='mx-auto '>
            <img key={`Kaytus`} src={images[4].path} alt={`Logo Kaytus`} />
          </a>
        </div>
        <div className='flex flex-col w-4/5 lg:w-1/4 companiesLogoBorder lg:border-none'>
          <h3 className='bg-blue text-white text-center lg:hidden block rounded-t-xl py-1'>
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
        <div className='flex flex-col w-4/5 lg:w-1/4 companiesLogoBorder lg:border-none'>
          <h4 className='bg-blue text-white text-center lg:hidden block rounded-t-xl py-1'>
            Networking
          </h4>
          <div className='flex flex-col'>
            <a href={images[1].url} className='mx-auto'>
              <img key={`Silicom`} src={images[1].path} alt={`Logo Silicom`} />
            </a>
          </div>
        </div>
        <div className='flex flex-col w-4/5 lg:w-1/4 companiesLogoBorder lg:border-none'>
          <h4 className='bg-blue text-white text-center lg:hidden block rounded-t-xl py-1'>
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
