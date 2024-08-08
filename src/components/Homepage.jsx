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

function Homepage() {
  return (
    <main>
      <div className='container p-8 md:mt-8 mx-auto flex flex-col items-center'>
        <div className='flex flex-col text-darkBlue'>
          <h1 className='text-6xl font-bold uppercase text-center'>
            Nextgen Hardware Solutions
          </h1>{' '}
          <div className='flex justify-around font-bold mt-4'>
            <p className='text-xl  hover:text-green transition-colors duration-200'>
              Integration
            </p>
            <p className='text-xl  hover:text-green transition-colors duration-200'>
              Resale
            </p>
            <p className='text-xl  hover:text-green transition-colors duration-200'>
              Sustainability services
            </p>
          </div>
        </div>

        <p className='w-3/4 mt-10 text-xl text-darkBlue'>
          At NextGen Hardware Solutions , our mission is to innovate by
          providing the latest and most efficient hardware solutions in the
          market. We aim to integrate seamlessly with your existing
          infrastructure, ensuring that our products add value and efficiency to
          your operations. Our goal is to inspire confidence in our customers by
          consistently delivering high-quality, reliable, and cost-effective
          solutions. We believe in breaking the mold of traditional hardware
          sales and offering solutions that are free from restrictive vendor
          lock-ins and heavy licensing fees, empowering you to achieve more with
          less.
        </p>
      </div>
      <div className='container p-8 py-12 md:mt-12 mx-auto flex flex-col items-center bg-darkBlue rounded-2xl'>
        <div className='text-white'>
          <h2 className='text-5xl font-bold uppercase text-center'>
            Who we serve?
          </h2>
        </div>
        <p className='w-3/4 mt-6 text-xl text-white'>
          NHS specializes in delivering high-performance IT hardware solutions,
          including servers, storage systems, and networking equipment, with a
          primary focus on catering to the unique needs of various sectors such
          as:
        </p>
        <ul className='text-xl text-white list-disc mt-6'>
          <li>Cloud Providers</li>
          <li>Large& Mid Enterprises</li>
          <li>Data Centers</li>
          <li>Managed Services Providers</li>
        </ul>

        <a href='/contact'>
          <button className='bg-white rounded-md p-2 px-12 mt-8 text-darkBlue font-bold text-2xl hover:shadow-lg hover:shadow-white/50'>
            Contact Us
          </button>
        </a>
      </div>

      <div className='container mx-auto pt-16'>
        <div className='flex flex-col md:flex-row'>
          {images.map((img, index) => (
            <a href={img.url} className='mx-auto w-3/4 md:w-1/4'>
              <img key={index} src={img.path} alt={`Image${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
export default Homepage
