import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contacts from './components/contact/Contacts'


function App() {
  return (<>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  </>
  )
}

export default App