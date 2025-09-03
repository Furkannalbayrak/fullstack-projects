import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();
    const [controlUser, setControlUser] = useState(false);
    const [controlDepartment, setControlDepartment] = useState(false);

    const handleClickUser = () => {
        setControlUser(!controlUser);
    }
    const handleClickDepartment = () => {
        setControlDepartment(!controlDepartment);
    }

    const panelUsers = [
        { text: "Kullanıcıları Listele", path: "/users/all-users" },
        { text: "Kullanıcı Ekle", path: "/users/add-user" },
        { text: "Kullanıcı Düzenle", path: "/users/update-user" },
        { text: "Kullanıcı Sil", path: "/users/delete-user" },
    ]

    const panelDepartments = [
        {text: "Departmanları Listele", path: "/departments/all-departments"},
        {text: "Departman Ekle", path: "/departments/add-department"},
        {text: "Departman Düzenle", path: "/departments/update-department"},
        {text: "Departman Sil", path: "/departments/delete-department"},
    ]

    return (
        <div>
            <div className=' bg-gray-800 text-white flex justify-between items-center px-6 fixed top-0 left-0 w-full z-50'>

                <div className=' font-bold text-2xl hidden sm:block'>
                    Albayrak.A.Ş
                </div>

                <div className=' text-xl flex'>
                    <div>
                        <div className='flex items-center justify-between hover:bg-blue-900 transition py-4 px-2 duration-150 ' onClick={handleClickUser}>
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <FaUser />
                                </div>
                                <div>
                                    Kullanıcılar
                                </div>
                            </div>

                            <div className='text-3xl' o>
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
                                    <ul className='absolute text-xl flex flex-col bg-gray-700 mt-1 rounded-lg'>
                                        {
                                            panelUsers.map((element, index) => (
                                                <li key={index} 
                                                    className='p-3 px-4 rounded-md  hover:bg-blue-800 cursor-pointer'
                                                    onClick={()=>{
                                                        navigate(element.path);
                                                        handleClickUser();
                                                    }}
                                                >{element.text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <div className='flex items-center justify-between gap-2 hover:bg-blue-900 transition duration-150 py-4 px-2' onClick={handleClickDepartment}>
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <IoMdBusiness />
                                </div>
                                <div>
                                    Departmanlar
                                </div>
                            </div>

                            <div className='text-3xl' >
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
                                    <ul className='absolute text-xl flex flex-col bg-gray-700 mt-1 rounded-lg'>
                                        {
                                            panelDepartments.map((element, index)=>(
                                                <li key={index}
                                                    className='p-3 px-4 rounded-md  hover:bg-blue-800 cursor-pointer'
                                                    onClick={()=>{
                                                        navigate(element.path);
                                                        handleClickDepartment();
                                                    }}
                                                >{element.text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header