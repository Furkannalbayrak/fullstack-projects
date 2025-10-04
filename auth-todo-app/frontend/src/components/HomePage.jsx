import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaRegSquare } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { HiTrash } from "react-icons/hi";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

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
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (text) {
      try {
        const response = await axios.post("http://localhost:3000/api/todos", { text }, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setTodos((prevTodos) => [...prevTodos, response.data]);
        setText("");
        console.log("Todo başarıyla eklendi");

      } catch (error) {
        console.error(error.message);
      }
    }
    else {
      alert("Görev eklemek için birşeyler yazın");
    }
  }

  const deleteTodo = async (todoID) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(`http://localhost:3000/api/todos/${todoID}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoID));
      console.log("Todo başarıyla silindi");

    } catch (error) {
      console.error(error.message);
    }
  }

  const updateIsDone = async (todoID, is_done) => {
    const token = localStorage.getItem("token");
    is_done = !is_done;

    try {
      const response = await axios.put(`http://localhost:3000/api/todos/${todoID}`, { is_done }, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoID ? { ...todo, is_done: response.data.is_done } : todo
        )
      )
      console.log("Todo başarıyla güncellendi");

    } catch (error) {
      console.error(error.message);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const showLogout = () => {
    setLogout(true);
  }
  const closeLogout = () => {
    setLogout(false);
  }

  return (
    <div className='w-screen'>
      <div className='sm:px-10'>
        <div className='h-screen max-w-2xl mx-auto overflow-hidden'>

          <div className='flex justify-between bg-blue-800 p-5'>
            <h2 className='text-3xl font-bold text-white'>Todo App</h2>
            <button
              onClick={showLogout}
              className='text-white bg-red-600 px-4 py-2 rounded-md transition duration-150 hover:bg-red-700'>Çıkış Yap</button>
          </div>

          <div className='p-6 bg-gray-100 h-full'>

            {/* Modal */}
            {logout && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg max-w-xs w-full">
                  <p className="text-lg text-center">Çıkış yapmak istediğinizden</p>
                  <p className="text-lg text-center">emin misiniz?</p>
                  <div className="flex justify-center gap-8 mt-4">
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 transition duration-150 hover:bg-red-700 text-white px-5 py-2 rounded-md"
                    >
                      Evet
                    </button>
                    <button
                      onClick={closeLogout}
                      className="bg-gray-500 transition duration-150 hover:bg-gray-600 text-white px-5 py-2 rounded-md"
                    >
                      Hayır
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className='text-3xl font-semibold text-center'>Hoş Geldin</p>
              <p className='text-center text-lg mt-2'>Görevlerinizi yönetmeye başlayın</p>

              <div className='text-center mt-5'>
                <form onSubmit={addTodo} className='flex gap-3 bg-white rounded-xl shadow-[0_5px_6px_-1px_rgba(0,0,0,0.1)] p-6'>
                  <input
                    type="text"
                    placeholder='Yeni görev ekle...'
                    className='px-4 py-3 outline-none border-2 border-gray-300 rounded-lg w-full text-lg'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button type='submit' className='bg-blue-400 text-white sm:px-7 px-4 rounded-md text-lg font-semibold transition duration-200 hover:bg-blue-600'>Ekle</button>
                </form>
              </div>
            </div>

            <div className='bg-white rounded-xl mt-6 shadow-[0_5px_6px_-1px_rgba(0,0,0,0.1)] overflow-y-auto sm:max-h-[380px] max-h-[320px]'>
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
                      todos.map((element) => (
                        <div className='flex items-center justify-between p-4 border-2 border-gray-100' key={element.id}>
                          <div className='flex items-center text-[27px] text-gray-600 cursor-pointer'>
                            {
                              element.is_done === false ? (
                                <FaRegSquare onClick={() => updateIsDone(element.id, element.is_done)} />
                              ) : (
                                <IoCheckbox onClick={() => updateIsDone(element.id, element.is_done)} className='text-blue-500 rounded-md' />
                              )
                            }

                            {
                              element.is_done === false ? (
                                <p className='text-lg pl-3 pr-3 cursor-default'>{element.text}</p>
                              ) : (
                                <p className='text-lg pl-3 pr-3 cursor-default text-gray-400 line-through'>{element.text}</p>
                              )
                            }
                          </div>
                          <p
                            onClick={() => deleteTodo(element.id)}
                            className='text-red-500 text-2xl transition duration-100 hover:text-red-700 cursor-pointer'><HiTrash />
                          </p>
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