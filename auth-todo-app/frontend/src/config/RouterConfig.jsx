import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import Login from '../components/Login'
import Register from '../components/Register'

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default RouterConfig