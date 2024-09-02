import { useEffect, useState } from 'react'
import Hero from './Hero'
import Companies from './Companies'
import Info from './Info'
import Services from './Services'
import textContent from '../content/textContent.json'

function HomePage({ currentLocale = 'pl' }) {
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    const visitedBefore = localStorage.getItem('isFirstVisit')
    if (!visitedBefore) {
      setIsFirstVisit(true)
      localStorage.setItem('isFirstVisit', 'true')
    }
  }, [])

  return (
    <main className='flex flex-col items-center'>
      <Hero
        isFirstVisit={isFirstVisit}
        currentLocale={currentLocale}
        textContent={textContent}
      />
      <Services
        isFirstVisit={isFirstVisit}
        currentLocale={currentLocale}
        textContent={textContent}
      />
      <Companies currentLocale={currentLocale} textContent={textContent} />
      <Info currentLocale={currentLocale} textContent={textContent} />
    </main>
  )
}

export default HomePage
