import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AllUsers from '../filterComponents/AllUsers'
import NameUsers from '../filterComponents/NameUsers'
import IdUsers from '../filterComponents/IdUsers'
import Hero from '../components/Hero'
import AddUser from '../userPanelComponents/AddUser'
import UpdateUser from '../userPanelComponents/UpdateUser'
import DeleteUser from '../userPanelComponents/DeleteUser'
import ListDepartment from '../departmentPanelComponents/ListDepartment'
import AddDepartment from '../departmentPanelComponents/AddDepartment'
import UpdateDepartment from '../departmentPanelComponents/UpdateDepartment'
import DeleteDepartment from '../departmentPanelComponents/DeleteDepartment'

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
          <Route path='/users/delete-user' element={<DeleteUser/>}>

          </Route>
          <Route path='/departments/all-departments' element={<ListDepartment/>}>

          </Route>
          <Route path='/departments/add-department' element={<AddDepartment/>}>

          </Route>
          <Route path='/departments/update-department' element={<UpdateDepartment/>}>

          </Route>
          <Route path='/departments/delete-department' element={<DeleteDepartment/>}>

          </Route>
        </Routes>
    </div>
  )
}

export default RouterConfig