import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
