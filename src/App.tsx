import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Jobs from './pages/Jobs'
import Landing from './pages/Landing'
import Story from './pages/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
        </Layout>
      </Router>
      
    </div>
  )
}

export default App
