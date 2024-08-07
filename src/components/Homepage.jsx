import Carousel from './Carousel'

function Homepage() {
  return (
    <main>
      <div className='container p-8 md:mt-8 mx-auto flex flex-col items-center'>
        <div className='flex flex-col text-darkBlue'>
          <h1 className='text-6xl font-bold uppercase text-center'>
            Nextgen Hardware Solutions
          </h1>
          <div className='flex justify-around font-bold mt-4'>
            <p className='text-xl hover:text-green transition-colors duration-200'>
              Cutting-edge
            </p>
            <p className='text-xl hover:text-green transition-colors duration-200'>
              Affordable
            </p>
            <p className='text-xl hover:text-green transition-colors duration-200'>
              Customer-centric
            </p>
          </div>
        </div>
        <p className='w-3/4 mt-10 text-xl text-darkBlue'>
          "After years of working in the hardware industry, selling hardware
          solutions of major OEMs, I decided to start NextGen Hardware Solutions
          with the aim of providing customers with cutting-edge solutions at the
          best price point. My experience in the industry revealed how big OEMs
          leverage on vendor lock-ins and heavy licensing models. But guess
          what? There are great solutions out there without all those
          disadvantages, and we are here to bring them to you!"-{' '}
          <strong>Rafal, founder.</strong>
        </p>
      </div>
      <div className='container p-8 py-12 md:mt-12 mx-auto flex flex-col items-center bg-darkBlue rounded-2xl'>
        <div className='text-white'>
          <h2 className='text-5xl font-bold uppercase text-center'>
            Our Mission
          </h2>
        </div>
        <p className='w-3/4 mt-6 text-xl text-white'>
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
        <a href='/contact'>
          <button className='bg-white rounded-md p-2 px-12 mt-8 text-darkBlue font-bold text-2xl hover:shadow-lg hover:shadow-white/50'>
            Contact Us
          </button>
        </a>
      </div>
      <Carousel />
      <div className='container p-8 md:mt-12 mx-auto flex flex-col items-center'>
        <div className='text-darkBlue'>
          <h2 className='text-5xl font-bold uppercase text-center'>
            Who we serve?
          </h2>
        </div>
        <p className='w-3/4 mt-6 text-xl text-darkBlue'>
          NHS specializes in delivering high-performance IT hardware solutions,
          including servers, storage systems, and networking equipment, with a
          primary focus on catering to the unique needs of various sectors such
          as:
        </p>
        <ul className='text-xl text-darkBlue list-disc mt-6'>
          <li>Cloud Providers</li>
          <li>Large& Mid Enterprises</li>
          <li>Data Centers</li>
          <li>Managed Services Providers</li>
        </ul>
      </div>
    </main>
  )
}
export default Homepage
