import Main from './components/Navbar/Navbar'
import { CssBaseline } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Tech from './components/Tech/Tech'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  )
}

export default App
