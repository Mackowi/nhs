import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='container mx-auto p-6 relative '>
      <div className='flex items-center justify-between'>
        {/* <div className='flex items-center'>
          <a href='/'>
            <img src='/logo.png' alt='logo' className='w-14' />
          </a>
          <h1 className='ml-4 text-3xl font-bold tracking-widest text-darkBlue'>
            Nextgen Hardware Solution
          </h1>
        </div> */}
        <a href='/'>
          <img src='/logo.png' alt='logo' className='w-16' />
        </a>

        <div className='hidden md:flex items-center space-x-8 '>
          {/* <a href='/about' className='link'>
            About Us
          </a> */}
          <a href='/partners' className='link'>
            Our Partners
          </a>
          <a href='/about' className='link'>
            Specs & Solutions
          </a>
          <a href='/contact' className='link'>
            Contact
          </a>
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
        className={`fixed left-0 right-0 top-0 bottom-0 bg-white  z-20 dark:border-white h-full ${
          open ? 'flex' : 'hidden'
        } animate-fade`}
      >
        <div className='flex flex-col justify-center p-8 items-start w-full space-y-16 font-bold text-xl relative'>
          {/* <a
            href='/about'
            className='link dark:hover:text-green'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            About
          </a> */}
          <a
            href='/partners'
            className='link dark:hover:text-green'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            Our Partners
          </a>
          <a
            href='/solutions'
            className='link dark:hover:text-green'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            Specs & Solutions
          </a>
          <a
            href='/contact'
            className='link dark:hover:text-green'
            onClick={() => {
              setOpen(!open)
              document.body.classList.toggle('overflow-hidden')
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
