import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watchhistory' element={ <WatchHistory />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
