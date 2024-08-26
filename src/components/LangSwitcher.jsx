import { swapLanguage } from '../utils/urlUtils'

const LanguageSwitcher = ({ currentLocale }) => {
  const changeLanguage = () => {
    let newUrl = swapLanguage(window.location.pathname, currentLocale)
    console.log('newUrl')
    console.log(newUrl)
    window.location.href = newUrl
  }

  return (
    <div className='flex border-2 border-blue rounded-xl bg-slate-200'>
      <button
        onClick={() => changeLanguage()}
        className={`switch w-8 ${
          currentLocale === 'pl' ? 'active  text-white' : ''
        }`}
      >
        PL
      </button>
      <button
        onClick={() => changeLanguage()}
        className={`switch w-8 ${
          currentLocale === 'en' ? 'active  text-white' : ''
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
