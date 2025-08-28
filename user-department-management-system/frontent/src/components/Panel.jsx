import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";

function Panel() {

  const [controlUser, setControlUser] = useState(false);
  const [controlDepartment, setControlDepartment] = useState(false);

  const handleClickUser = () => {
    setControlUser(!controlUser);
  }
  const handleClickDepartment = ()=>{
    setControlDepartment(!controlDepartment);
  }

  return (
    <div>
      <div className='w-80 h-screen bg-gray-800 text-white'>

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
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Kullanıcıları Listele</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Kullanıcı Ekle</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Kullanıcı Düzenle</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Kullanıcı Sil</li>
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
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departmanları Listele</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Ekle</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Düzenle</li>
                  <li className='p-2 pl-4 ml-4 rounded-md  hover:bg-blue-800 cursor-pointer'>Departman Sil</li>
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