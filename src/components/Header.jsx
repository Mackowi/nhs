import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='container mx-auto p-6 relative '>
      <div className='flex items-center justify-between'>
        {/* <Link to={'/'}>
          <img src={logo} alt='logo' className='w-16' />
        </Link> */}
        <img src={logo} alt='logo' className='w-16' />

        {/* <div className='hidden md:flex items-center space-x-8 '>
          <Link to={'/about'} className='link'>
            About Us
          </Link>
          <Link to={'/partners'} className='link'>
            Our Partners
          </Link>
          <Link to={'/solutions'} className='link'>
            Specs & Solutions
          </Link>
          <Link to={'/contact'} className='link'>
            Contact
          </Link>
        </div> */}

        <button
          id='menu-btn'
          className={`block hamburger md:hidden focus:outline-none ${
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
        className={`fixed left-0 right-0 top-0 bottom-0 bg-white dark:bg-lightGreeny z-20 dark:border-white h-full ${
          open ? 'flex' : 'hidden'
        } animate-fade`}
      >
        {/* <div className='flex flex-col justify-center p-8 items-start w-full space-y-16 font-bold text-xl dark:text-greeny relative'>
          <Link
            to='/uslugi'
            className='link dark:hover:text-greeny'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            Usługi
          </Link>
          <Link
            to='/kontakt'
            className='link dark:hover:text-greeny'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            Kontakt
          </Link>
        </div> */}
      </div>
    </header>
  )
}
export default Header
