import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Help from './pages/Help'
import NotFound from './pages/NotFound'

const App = () => {
  return (
  <>

  <Navbar />

  <Routes>
    <Route path = "/" element = {<Home />}/>
    <Route path = "/about" element = {<About />}/>
    <Route path = "/contact" element = {<Contact />}/>
    <Route path = "/courses" element = {<Courses />}/>
    <Route path = "/gallery" element = {<Gallery />}/>
    <Route path = "/services" element = {<Services />}/>
    <Route path = "/help" element = {<Help />}/>
    <Route path = "*" element = {<NotFound />} />
  </Routes>
  </>
  )
}

export default App