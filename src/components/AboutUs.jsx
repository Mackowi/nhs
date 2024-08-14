function AboutUs() {
  return (
    <div className='flex-grow'>
      <div className='container p-12 md:mt-12 mx-auto flex flex-col md:flex-row gap-12 bg-lightPurple rounded-2xl'>
        <div>
          <div className='text-white'>
            <h2 className='text-5xl font-bold  text-center'>Our Mission</h2>
          </div>
          <p className='mt-6 text-xl text-white text-justify'>
            "After years of working in the hardware industry, selling hardware
            solutions of major OEMs, I decided to start NextGen Hardware
            Solutions with the aim of providing customers with cutting-edge
            solutions at the best price point. My experience in the industry
            revealed how big OEMs leverage on vendor lock-ins and heavy
            licensing models. But guess what? There are great solutions out
            there without all those disadvantages, and we are here to bring them
            to you!"- <strong>Rafal, founder.</strong>
          </p>
        </div>
        <img
          src='/rafal.png'
          alt='founder photo'
          className=' md:w-1/4 rounded-full'
        />
      </div>
    </div>
  )
}
export default AboutUs
