import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AllUsers from '../filterComponents/AllUsers'
import NameUsers from '../filterComponents/NameUsers'
import IdUsers from '../filterComponents/IdUsers'
import Hero from '../components/Hero'
import AddUser from '../panelComponents/AddUser'
import UpdateUser from '../panelComponents/UpdateUser'

function RouterConfig() {
  return (
    <div>
        <Routes>
          <Route path='/' element={
            <>
              <Hero/>
              <AllUsers/>
            </>
          }/>
          <Route path='/users/all-users' element={
            <>
              <Hero/>
              <AllUsers/>  
            </>
          } />
          <Route path='/users/name' element={
            <>
              <Hero/>
              <NameUsers/>
            </>
          } />
          <Route path='/users/ID' element={
            <>
              <Hero/>
              <IdUsers/>
            </>
          } />
          <Route path='/users/add-user' element={<AddUser/>} >

          </Route>
          <Route path='/users/update-user' element={<UpdateUser/>} > 

          </Route>
        </Routes>
    </div>
  )
}

export default RouterConfig