function Info() {
  return (
    <div className='container p-8 py-12 md:mt-12 mx-auto flex flex-col items-center bg-darkBlue rounded-2xl'>
      <div className='text-white'>
        <h2 className='text-5xl font-bold text-center'>Who we serve?</h2>
      </div>
      <p className='w-3/4 mt-6 text-xl text-white text-justify'>
        NGHS specializes in delivering high-performance IT hardware solutions,
        including: servers, storage, networking equipment, AI clusters, with a
        primary focus on catering to the unique needs of sectors such as:
      </p>
      <ul className='text-xl text-white list-disc mt-6 px-16'>
        <li>Cloud Providers</li>
        <li>Large & Mid Enterprises</li>
        <li>Data Centers</li>
        <li>Managed Services Providers</li>
      </ul>

      <a href='/contact'>
        <button className='bg-white rounded-md p-2 px-12 mt-8 text-darkBlue font-bold text-2xl hover:shadow-lg hover:shadow-white/50'>
          Contact Us
        </button>
      </a>
    </div>
  )
}
export default Info
