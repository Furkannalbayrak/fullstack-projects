import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function NameUsers() {

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);

    const filterData = async () => {
        try {
            if (inputValue) {
                const response = await axios.get(`http://localhost:3000/users/name/${inputValue}`);
                setData(response.data);
            }
            else {
                setData([]);
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='pb-16'>
            <div className='flex items-center -space-x-14 w-10/12 mx-auto'>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='w-96 lg:text-xl md:text-lg text-md bg-gray-200 pl-10 pr-20 py-3 rounded-full outline-none' placeholder='Aramak istediğiniz ismi giriniz' />
                <div className='z-10 text-3xl cursor-pointer' onClick={filterData}>
                    <IoIosSearch />
                </div>
            </div>

            {
                (data.length === 0) ? (
                    <div className='p-4 lg:text-xl md:text-lg text-md text-red-500 w-10/12 mx-auto'>Lütfen Data basede bulunan bir ad giriniz</div>
                )
                    : (
                        <table className='w-10/12 mx-auto table-auto border-collapse lg:text-lg md:text-sm text-xs mt-10'>
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">ID</th>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">Ad</th>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">Soyad</th>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">Email</th>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">Departman No</th>
                                    <th className="border border-gray-400 lg:px-4 px-2 py-2 text-left bg-blue-100">Departman</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((element, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.id} </td>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.name} </td>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.surname} </td>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.email} </td>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.department_id} </td>
                                            <td className="border border-gray-300 lg:px-3 px-1 py-2"> {element.department_name} </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
            }
        </div>
    )
}

export default NameUsers