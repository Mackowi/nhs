import { useEffect, useState } from 'react'
import Hero from './Hero'
import Companies from './Companies'
import Info from './Info'
import Services from './Services'

function HomePage() {
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    const visitedBefore = localStorage.getItem('isFirstVisit')
    if (!visitedBefore) {
      setIsFirstVisit(true)
      localStorage.setItem('isFirstVisit', 'true')
    }
  }, [])

  return (
    <main>
      <Hero isFirstVisit={isFirstVisit} />
      <Services isFirstVisit={isFirstVisit} />
      <Companies />
      <Info />
    </main>
  )
}

export default HomePage
