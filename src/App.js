import React from 'react'
import Hero from './Components/Hero'
import { Route, Routes } from 'react-router-dom'
import SearchEngine from './Components/SearchEngine'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/search' element={<SearchEngine />}/>
    </Routes>
  )
}

export default App