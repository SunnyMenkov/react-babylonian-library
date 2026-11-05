import { Route, Routes } from 'react-router-dom'
import '../styles/app.css'
import AboutPage from '../pages/about/AboutPage.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'
import Navbar from '../shared/ui/Navbar.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
