import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AllUsers from '../filterComponents/AllUsers'
import NameUsers from '../filterComponents/NameUsers'
import IdUsers from '../filterComponents/IdUsers'

function RouterConfig() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<AllUsers/>} />
          <Route path='/all-users' element={<AllUsers/>} />
          <Route path='/name' element={<NameUsers/>} />
          <Route path='/ID' element={<IdUsers/>} />
        </Routes>
    </div>
  )
}

export default RouterConfig