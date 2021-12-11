
import React from 'react'
import Home from './components/home/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from './routes/Contact'
import Pricing from './routes/Pricing'
import Faq from './routes/Faq'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

