function Footer() {
  return (
    <footer className='py-8 bg-white text-darkBlue'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto md:space-y-0 text-center px-6'>
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
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 order-first md:order-last mb-12 mt-4 text-xl md:text-base'>
          {/* <a href='/about' className='link'>
            About Us
          </a> */}
          <a href='/partners' className='link'>
            Our Partners
          </a>
          <a href='/solutions' className='link'>
            Specs & Solutions
          </a>
          <a href='/contact' className='link'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
