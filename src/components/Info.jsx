function Info({ currentLocale, textContent }) {
  return (
    <div className='container py-8 my-12 md:mb-20 md:mt-12 mx-auto flex flex-col items-center bg-blue rounded-2xl gap-8'>
      <div className='text-white w-3/4'>
        <h2 className='text-4xl font-bold text-center'>
          {textContent[`${currentLocale}`].homepage.info[1]}
        </h2>
        <p className='mt-6 text-xl text-white text-justify'>
          {textContent[`${currentLocale}`].homepage.info[2]}
        </p>
      </div>

      <div className='flex flex-col bg-darkerBlue text-xl text-white font-bold rounded-2xl gap-4 md:gap-2 py-6 w-3/4 md:w-1/2 text-center'>
        <p className='p-2 tracking-widest'>
          {textContent[`${currentLocale}`].homepage.info[3]}
        </p>
        <p className='p-2  tracking-widest'>
          {textContent[`${currentLocale}`].homepage.info[4]}
        </p>
        <p className='p-2  tracking-widest'>
          {textContent[`${currentLocale}`].homepage.info[5]}
        </p>
        <p className='p-2  tracking-widest'>
          {textContent[`${currentLocale}`].homepage.info[6]}
        </p>
      </div>

      <a href={`/${currentLocale}/contact`}>
        <button className='bg-white rounded-md p-2 m-4 px-12 text-blue font-bold text-2xl hover:shadow-lg hover:shadow-black/50'>
          {textContent[`${currentLocale}`].homepage.info[7]}
        </button>
      </a>
    </div>
  )
}
export default Info
