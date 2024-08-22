import { useEffect, useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/') {
      setCurrentPage('home')
    } else if (window.location.pathname === '/about') {
      setCurrentPage('about')
    } else if (window.location.pathname === '/blog') {
      setCurrentPage('blog')
    } else if (window.location.pathname === '/contact') {
      setCurrentPage('contact')
    }
    const visitedBefore = localStorage.getItem('isFirstVisit')
    if (!visitedBefore) {
      setIsFirstVisit(true)
      // localStorage.setItem('isFirstVisit', 'true')
    }
  }, [])

  return (
    <header className='container mx-auto p-6 relative'>
      <div
        className={`flex items-center justify-between ${
          currentPage === 'home' && isFirstVisit ? 'toAnimateFade' : ''
        }`}
        style={{ animationDelay: currentPage === 'home' ? '3s' : '0s' }}
      >
        <a href='/'>
          <img src='/logo.png' alt='logo' className='w-16' />
        </a>
        <div className='hidden md:flex items-center space-x-8 '>
          {currentPage !== 'home' && (
            <a href='/' className='link'>
              Home
            </a>
          )}
          {currentPage !== 'about' && (
            <a href='/about' className='link'>
              About Us
            </a>
          )}
          {currentPage !== 'blog' && (
            <a href='/blog' className='link'>
              Products / Blog
            </a>
          )}
          {currentPage !== 'contact' && (
            <a href='/contact' className='link'>
              Contact
            </a>
          )}
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
              href='/'
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              Home
            </a>
          )}
          {currentPage !== 'about' && (
            <a
              href='/about'
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              About
            </a>
          )}
          {currentPage !== 'blog' && (
            <a
              href='/blog'
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              Product / services
            </a>
          )}{' '}
          {currentPage !== 'contact' && (
            <a
              href='/contact'
              className='link'
              onClick={() => {
                setOpen(!open)
                document.body.classList.toggle('overflow-hidden')
              }}
            >
              Contact
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
