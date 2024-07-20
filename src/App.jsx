import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UserLoginPage from './pages/UserLoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/join' element={<UserLoginPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
