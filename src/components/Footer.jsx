import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='py-16 bg-white text-darkBlue'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto md:space-y-0 text-center px-6'>
        <div className='flex flex-col md:flex-row md:space-x-8 items-center'>
          <Link to={'/'}>
            <img src={logo} alt='logo' className='w-28 mx-auto mb-16 md:mb-0' />
          </Link>
          <div className='flex flex-col gap-4 tracking-widest font-bold text-sm md:text-left'>
            <p>Rafal Żydek</p>
            <p>+31 62 481 34 11</p>
            <p>rafal.zydek@nghs.eu</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 order-first md:order-last mb-16 text-xl md:text-base'>
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
        </div>
      </div>
    </footer>
  )
}
export default Footer
