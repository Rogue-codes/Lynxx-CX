import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/landingPage/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
        </Layout>
      </Router>
      
    </div>
  )
}

export default App
