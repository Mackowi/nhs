import { useEffect, useState } from 'react'
import LangSwitcher from './LangSwitcher'
import textContent from './textContent.json'

// const header = {
//   pl: ['O Nas', 'Rozwiązania', 'Kontakt', 'Strona Główna'],
//   en: ['About Us', 'Solutions', 'Contact', 'Home'],
// }

function Header({ currentLocale = 'pl' }) {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    if (window.location.pathname === `/${currentLocale}/`) {
      setCurrentPage('home')
    } else if (window.location.pathname === `/${currentLocale}/about`) {
      setCurrentPage('about')
    } else if (window.location.pathname === `/blog/${currentLocale}/`) {
      setCurrentPage('blog')
    } else if (window.location.pathname === `/${currentLocale}/contact`) {
      setCurrentPage('contact')
    }
    const visitedBefore = localStorage.getItem('isFirstVisit')
    if (!visitedBefore) {
      setIsFirstVisit(true)
      localStorage.setItem('isFirstVisit', 'true')
    }
  }, [currentLocale])

  return (
    <header className='container mx-auto p-4 md:p-4 relative'>
      <div
        className={`flex items-center justify-between ${
          currentPage === 'home' && isFirstVisit ? 'toAnimateFade' : ''
        }`}
        style={{ animationDelay: currentPage === 'home' ? '3s' : '0s' }}
      >
        <a href={`/${currentLocale}/`}>
          <img src='/logo.png' alt='logo' className='w-16' />
        </a>
        <div className='hidden md:flex items-center space-x-8 '>
          {currentPage !== 'about' ? (
            <a href={`/${currentLocale}/about`} className='link'>
              {textContent[`${currentLocale}`].header[1]}
            </a>
          ) : (
            <a href={`/${currentLocale}`} className='link'>
              {textContent[`${currentLocale}`].header[4]}
            </a>
          )}

          {currentPage !== 'blog' ? (
            <a href={`/blog/${currentLocale}`} className='link'>
              {textContent[`${currentLocale}`].header[2]}
            </a>
          ) : (
            <a href={`/${currentLocale}`} className='link'>
              {textContent[`${currentLocale}`].header[4]}
            </a>
          )}

          {currentPage !== 'contact' ? (
            <a href={`/${currentLocale}/contact`} className='link'>
              {textContent[`${currentLocale}`].header[3]}
            </a>
          ) : (
            <a href={`/${currentLocale}`} className='link'>
              {textContent[`${currentLocale}`].header[4]}
            </a>
          )}

          <LangSwitcher currentLocale={currentLocale} />
        </div>
        <button
          id='menu-btn'
          className={`block hamburger  md:hidden focus:outline-none ${
            open ? 'open' : ''
          }`}
          type='button'
          onClick={() => {
            setOpen(!open)
            document.body.classList.toggle('overflow-hidden')
          }}
        >
          <span className='hamburger-top z-30'></span>
          <span className='hamburger-middle z-30'></span>
          <span className='hamburger-bottom z-30'></span>
        </button>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 bottom-0 bg-white z-20 h-full ${
          open ? 'flex' : 'hidden'
        } animate-fade`}
      >
        <div className='flex flex-col justify-center p-8 items-start w-full space-y-16 font-bold text-xl relative'>
          {currentPage !== 'home' && (
            <a
              href={`/${currentLocale}/`}
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              {textContent[`${currentLocale}`].header[4]}
            </a>
          )}
          {currentPage !== 'about' && (
            <a
              href={`/${currentLocale}/about`}
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              {textContent[`${currentLocale}`].header[1]}
            </a>
          )}
          {currentPage !== 'blog' && (
            <a
              href={`/blog/${currentLocale}/`}
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              {textContent[`${currentLocale}`].header[2]}
            </a>
          )}
          {currentPage !== 'contact' && (
            <a
              href={`/${currentLocale}/contact`}
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              {textContent[`${currentLocale}`].header[3]}
            </a>
          )}
          <LangSwitcher currentLocale={currentLocale} />
        </div>
      </div>
    </header>
  )
}
export default Header
