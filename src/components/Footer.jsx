import { useEffect, useState } from 'react'
import textContent from '../content/textContent.json'

function Footer({ currentLocale = 'pl' }) {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    if (window.location.pathname === `/${currentLocale}/`) {
      setCurrentPage('home')
    } else if (window.location.pathname === `/${currentLocale}/about`) {
      setCurrentPage('about')
    } else if (window.location.pathname === `/blog/${currentLocale}`) {
      setCurrentPage('blog')
    } else if (window.location.pathname === `/${currentLocale}/contact`) {
      setCurrentPage('contact')
    }
    const visitedBefore = localStorage.getItem('isFirstVisit')
    if (!visitedBefore) {
      localStorage.setItem('isFirstVisit', 'true')
    }
  }, [currentLocale])

  return (
    <footer className='pb-8 bg-white text-blue'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto md:space-y-0 text-center px-4'>
        <div className='flex flex-col md:flex-row md:space-x-8 items-center'>
          <a href='/'>
            <img
              src='/logo.png'
              alt='logo'
              className='w-28 mx-auto mb-12 md:mb-0'
            />
          </a>
          <div className='flex flex-col gap-4 tracking-widest font-bold text-sm md:text-left'>
            <p>Rafal Żydek</p>
            <p>+31 62 481 34 11</p>
            <p>rafal.zydek@nghs.eu</p>
            <p>{textContent[`${currentLocale}`].footer}</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 order-first md:order-last mb-12 mt-4 text-xl md:text-base'>
          <a href={`/${currentLocale}`} className='link'>
            {textContent[`${currentLocale}`].header[4]}
          </a>
          <a href={`/${currentLocale}/about`} className='link'>
            {textContent[`${currentLocale}`].header[1]}
          </a>
          <a href={`/blog/${currentLocale}`} className='link'>
            {textContent[`${currentLocale}`].header[2]}
          </a>
          <a href={`/${currentLocale}/contact`} className='link'>
            {textContent[`${currentLocale}`].header[3]}
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
