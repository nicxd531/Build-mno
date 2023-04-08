import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blogs/Blogs'
import AboutUs from './Abooutus/AboutUs'
import ContactUs from './Contactus/ContactUs'
import NavBar from './nav/NavBar'
import './Main.css'


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  )

}

export default App
