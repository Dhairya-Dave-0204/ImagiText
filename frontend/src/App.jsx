import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BuyCredit, Home, Result } from './pages/page_index'
import { Footer, Login, Navbar } from './components/component_index'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'


function App() {

  const { showLogin } = useContext(AppContext)

  return (
    <div className='min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50'>
    <Navbar />
    { showLogin && <Login />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/buy" element={<BuyCredit />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
