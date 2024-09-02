import textContent from '../content/textContent.json'

function AboutPage({ currentLocale }) {
  return (
    <main className='flex-grow px-4'>
      <div className='container py-12 md:pl-12 my-24 mt-12 mx-auto flex flex-col lg:flex-row gap-12 bg-lightPurple rounded-2xl tracking-wide'>
        <div className='flex flex-col w-3/4 mx-auto'>
          <div className='text-white'>
            <h2 className='text-4xl font-bold text-center py-8 md:py-0 md:mb-8 lg:mb-12'>
              {textContent[`${currentLocale}`].aboutUs[1]}
            </h2>
          </div>
          <p className='text-xl text-white text-justify'>
            {textContent[`${currentLocale}`].aboutUs[2]}
            <br />
            <br />
          </p>
          <p className='text-xl text-white ml-auto'>
            <strong> {textContent[`${currentLocale}`].aboutUs[3]}</strong>
          </p>
        </div>
        <img
          src='/rafal.png'
          alt='founder photo'
          className='w-3/5 lg:w-1/4 rounded-3xl mx-auto'
        />
        <p></p>
      </div>
    </main>
  )
}
export default AboutPage
