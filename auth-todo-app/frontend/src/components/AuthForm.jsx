import React from 'react'
import { Link } from "react-router-dom";

function AuthForm() {
    return (
        <div className='p-10'>
            <div className=' bg-white rounded-2xl pt-10 pb-14 px-14 text-center max-w-md'>
                <div className='text-indigo-500 text-[42px] font-bold'>
                    TodoApp
                </div>

                <div className='text-3xl font-semibold mt-6 text-gray-700'>
                    Hoş Geldiniz!
                </div>

                <div className='text-lg text-zinc-500 mt-6'>
                    Görevlerinizi organize edin, hedeflerinizi gerçekleştirin. Hayatınızı daha düzenli hale getirin.
                </div>

                <div>

                </div>

                <Link
                    to={"/login"}
                    className='block bg-gradient-to-tr from-indigo-400 to-purple-500 px-5 py-[14px] rounded-xl text-white text-xl cursor-pointer font-bold mt-10
                transition-colors duration-300
                 hover:from-indigo-500 hover:to-purple-600'
                >
                    Oturum Aç
                </Link>

                <Link
                    to={"/register"}
                    className='block bg-gradient-to-tr from-indigo-400 to-purple-500 p-[2px] rounded-xl text-xl mt-4 cursor-pointer'
                >
                    <div className='bg-white py-3 px-6 rounded-lg font-bold text-indigo-500 hover:bg-indigo-400 hover:text-white'>
                        Kayıt Ol
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AuthForm