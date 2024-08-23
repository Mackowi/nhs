import { useEffect, useState } from 'react'

function Footer() {
  const [currentPage, setCurrentPage] = useState('')

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
  }, [])

  return (
    <footer className='py-8 bg-white text-blue'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto md:space-y-0 text-center'>
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
            <p>Amersfoort, Netherlands</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 order-first md:order-last mb-12 mt-4 text-xl md:text-base'>
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
      </div>
    </footer>
  )
}
export default Footer
