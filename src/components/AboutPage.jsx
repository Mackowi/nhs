function AboutPage() {
  return (
    <main className='flex-grow'>
      <div className='container  p-8 mt-12 mx-auto flex flex-col md:flex-row gap-12 bg-lightPurple rounded-2xl tracking-wide'>
        <div className='flex flex-col md:gap-24'>
          <div className='text-white'>
            <h2 className='text-5xl font-bold text-center py-8 md:py-0'>
              Our Mission
            </h2>
          </div>
          <p className='text-xl text-white text-justify '>
            "After years of working in the hardware industry, selling hardware
            solutions of major OEMs, I decided to start NextGen Hardware
            Solutions with the aim of providing customers with cutting-edge
            solutions at the best price point. My experience in the industry
            revealed how big OEMs leverage on vendor lock-ins and heavy
            licensing models. But guess what? There are great solutions out
            there without all those disadvantages, and we are here to bring them
            to you!"
            <br />
            <br />
            <strong> - Rafal, founder.</strong>
          </p>
        </div>
        <img
          src='/rafal.png'
          alt='founder photo'
          className=' md:w-1/4 rounded-full'
        />
        <p></p>
      </div>
    </main>
  )
}
export default AboutPage
