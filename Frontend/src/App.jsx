import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './home/Home'
import Courses from './courses/Courses'


function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={<Courses />} />
  </Routes>
  </>
  )
}

export default App