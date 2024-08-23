function Info() {
  return (
    <div className='container p-12 my-12 md:mb-20 md:mt-12 mx-auto flex flex-col items-center bg-blue rounded-2xl gap-8'>
      <div className='text-white md:w-3/4'>
        <h2 className='text-4xl font-bold text-center'>Who we serve?</h2>
        <p className='mt-6 text-xl text-white text-justify'>
          NGHS specializes in delivering high-performance IT hardware solutions,
          including: servers, storage, networking equipment, AI clusters, with a
          primary focus on catering to the unique needs of sectors such as:
        </p>
      </div>
      {/* <ul className='text-xl text-white list-disc mt-6'>
        <li>Cloud Providers</li>
        <li>Large & Mid Enterprises</li>
        <li>Data Centers</li>
        <li>Managed Services Providers</li>
      </ul> */}
      <div className='flex flex-col bg-darkerBlue text-xl text-white font-bold rounded-2xl gap-4 py-6 px-8'>
        <p className='p-2  tracking-widest'>Cloud Providers</p>
        <p className='p-2  tracking-widest'>Large & Mid Enterprises</p>
        <p className='p-2  tracking-widest'>Data Centers</p>
        <p className='p-2  tracking-widest'>Managed Services Providers</p>
      </div>

      <a href='/contact'>
        <button className='bg-white rounded-md p-2 m-4 px-12 text-blue font-bold text-2xl hover:shadow-lg hover:shadow-black/50'>
          Contact Us
        </button>
      </a>
    </div>
  )
}
export default Info
