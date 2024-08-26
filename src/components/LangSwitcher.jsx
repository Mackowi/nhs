import { getRelativeLocaleUrl } from 'astro:i18n'
import { swapLanguage } from '../utils/urlUtils'

const LanguageSwitcher = ({ currentLocale }) => {
  const changeLanguage = () => {
    const blogRegex = /blog*/
    if(window.location.href.match()) {

    }
    let newUrl = swapLanguage(window.location.pathname)
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
