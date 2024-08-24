import textContent from './textContent.json'

function AboutPage({ currentLocale }) {
  return (
    <main className='flex-grow'>
      <div className='container p-8 mt-12 mx-auto flex flex-col md:flex-row gap-12 bg-lightPurple rounded-2xl tracking-wide'>
        <div className='flex flex-col'>
          <div className='text-white'>
            <h2 className='text-5xl font-bold text-center py-8 md:py-0 mb-8 md:mb-24'>
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
          className=' md:w-1/4 rounded-2xl'
        />
        <p></p>
      </div>
    </main>
  )
}
export default AboutPage
