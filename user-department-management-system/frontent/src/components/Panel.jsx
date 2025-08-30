import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Panel() {

  const navigate = useNavigate();
  const [controlUser, setControlUser] = useState(false);
  const [controlDepartment, setControlDepartment] = useState(false);

  const handleClickUser = () => {
    setControlUser(!controlUser);
  }
  const handleClickDepartment = ()=>{
    setControlDepartment(!controlDepartment);
  }

  const panelUsers = [
    {text: "Kullanıcıları Listele", path: "/users/all-users" },
    {text: "Kullanıcı Ekle", path: "/users/add-user"},
    {text: "Kullanıcı Düzenle", path: "/users/update-user"},
    {text: "Kullanıcı Sil", path: "/users/delete-user"},
  ]

  return (
    <div>
      <div className='w-80 h-screen bg-gray-800 text-white fixed'>

        <div className=' font-bold text-3xl p-7'>
          Albayrak.A.Ş
        </div>

        <div className=' text-2xl mt-8 space-y-2'>
          <div className='flex items-center justify-between hover:bg-blue-900 p-3 pl-5 pr-5 transition duration-150'>
            <div className='flex gap-4 items-center'>
              <div>
                <FaUser />
              </div>
              <div>
                Kullanıcılar
              </div>
            </div>

            <div className='text-3xl' onClick={handleClickUser}>
              {
                controlUser ? (
                  <MdArrowDropDown />
                )
                  : (
                    <MdArrowLeft />
                  )
              }
            </div>
          </div>

          {
            controlUser && (
              <div>
                <ul className='text-xl w-11/12 space-y-1 flex flex-col'>
                  {
                    panelUsers.map((element, index)=>(
                      <li key={index} className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'
                        onClick={()=> navigate(element.path)}
                      >{element.text}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }

          <div className='flex items-center justify-between  hover:bg-blue-900 p-3 pl-5 pr-5 transition duration-150'>
            <div className='flex gap-4 items-center'>
              <div>
                <IoMdBusiness />
              </div>
              <div>
                Departmanlar
              </div>
            </div>

            <div className='text-3xl' onClick={handleClickDepartment}>
              {
                controlDepartment ? (
                  <MdArrowDropDown />
                )
                  : (
                    <MdArrowLeft />
                  )
              }
            </div>
          </div>

          {
            controlDepartment && (
              <div>
                <ul className='text-xl w-11/12 space-y-1 flex flex-col'>
                  <li onClick={()=> navigate("/departments/all-departments")} className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departmanları Listele</li>
                  <li onClick={()=> navigate("/departments/add-department")} className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Ekle</li>
                  <li onClick={()=> navigate("/departments/update-department")} className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Düzenle</li>
                  <li onClick={()=> navigate("/departments/delete-department")} className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Sil</li>
                </ul>
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Panel