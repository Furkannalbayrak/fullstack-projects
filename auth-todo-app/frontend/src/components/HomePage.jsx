import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
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
    <div>
      <div>
        <div>

          <div>
            <h2>Todo App</h2>
            <button>Çıkış Yap</button>
          </div>

          <div>
            <p>Hoş Geldin</p>
            <p>Görevlerinizi yönetmeye başlayın</p>

            <div>
              <form action="">
                <input type="text" />
                <button>Ekle</button>
              </form>
            </div>

          </div>

          <div>
            {todos.length === 0 ?
              (
                <div>
                  <p>
                    <AiOutlineFileAdd />
                  </p>

                  <div>
                    Henüz görev eklenmemiş
                  </div>
                </div>
              ) : (
                <div>
                  {
                    todos.map((element, index) => (
                      <div key={element.id}>
                        <p>
                          {
                            element.is_done === "false" ? (
                              <IoCheckbox />
                            ) : (
                              <MdCheckBoxOutlineBlank />
                            )
                          }
                        </p>
                        <p>{element.text}</p>
                        <p><HiTrash /></p>
                      </div>
                    ))
                  }
                </div>
              )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage