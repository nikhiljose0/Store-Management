import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import './bootstrap.min.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dash' element={  <Dashboard /> } />
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
