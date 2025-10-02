import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";

import { IoCheckbox } from "react-icons/io5";
import { HiTrash } from "react-icons/hi";

function HomePage() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get("http://localhost:3000/api/todos", {
            headers: { Authorization: `Bearer ${token}` }
          });
          setTodos(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchTodos();

    console.log(todos);
  }, []);

  return (
    <div className='w-screen'>
      <div className='px-10'>
        <div className='h-screen max-w-2xl mx-auto overflow-hidden'>

          <div className='flex justify-between bg-blue-800 p-5'>
            <h2 className='text-3xl font-bold text-white'>Todo App</h2>
            <button className='text-white bg-red-600 px-4 py-2 rounded-md transition duration-150 hover:bg-red-700'>Çıkış Yap</button>
          </div>

          <div className='p-6 bg-gray-100 h-full'>
            <div>
              <p className='text-3xl font-semibold text-center'>Hoş Geldin</p>
              <p className='text-center text-lg mt-2'>Görevlerinizi yönetmeye başlayın</p>

              <div className='text-center mt-5'>
                <form className='flex gap-3 bg-white rounded-xl shadow-[0_5px_6px_-1px_rgba(0,0,0,0.1)] p-6'>
                  <input type="text" placeholder='Yeni görev ekle...' className='px-4 py-3 outline-none border-2 border-gray-300 rounded-lg w-full text-lg' />
                  <button className='bg-blue-400 text-white px-7 rounded-md text-lg font-semibold transition duration-200 hover:bg-blue-600'>Ekle</button>
                </form>
              </div>
            </div>

            <div className='bg-white rounded-xl mt-8 shadow-[0_5px_6px_-1px_rgba(0,0,0,0.1)]'>
              {todos.length === 0 ?
                (
                  <div className='flex flex-col gap-4 text-center items-center p-8'>
                    <div className='text-7xl text-gray-400'>
                      <AiOutlineFileAdd />
                    </div>

                    <div className='text-lg text-gray-800'>
                      Henüz görev eklenmemiş
                    </div>
                  </div>
                ) : (
                  <div>
                    {
                      todos.map((element, index) => (
                        <div className='flex items-center justify-between p-4 border-2 border-gray-100' key={element.id}>
                          <div className='flex items-center text-[27px] text-gray-600 cursor-pointer'>
                            {
                              element.is_done === "false" ? (
                                <IoCheckbox className='' />

                              ) : (
                                <FaRegSquare />
                              )
                            }
                            <p className='text-lg pl-3 pr-8 cursor-default'>{element.text}</p>
                          </div>
                          <p className='text-red-500 text-2xl transition duration-100 hover:text-red-700 cursor-pointer'><HiTrash /></p>
                        </div>
                      ))
                    }
                  </div>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage