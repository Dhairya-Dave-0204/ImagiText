import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BuyCredit, Home, Result } from './pages/page_index'
import { Navbar } from './components/component_index'


function App() {

  return (
    <div className='min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/buy" element={<BuyCredit />} />
    </Routes>
    </div>
  )
}

export default App
