import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blogs/Blogs'
import AboutUs from './Abooutus/AboutUs'
import ContactUs from './Contactus/ContactUs'
import NavBar from './nav/NavBar'
import './Main.css'
// import {ThemeProvider} from '@mui/material'
// import { useTheme } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import {theme} from './styles/muiTheme'
import Footer from './Footer/Footer'


function App() {
  //  const theme = useTheme()
  return (
    <ThemeProvider theme={theme} >
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </ThemeProvider>
  )

}

export default App
