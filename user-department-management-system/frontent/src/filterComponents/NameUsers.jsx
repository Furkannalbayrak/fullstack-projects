import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function NameUsers() {

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);

    const filterData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/name/${inputValue}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className='flex items-center -space-x-14 ml-8'>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='w-10/12 text-xl bg-red-100 pl-10 pr-20 py-3 rounded-full outline-none' placeholder='Aramak istediğiniz ismi giriniz' />
                <div className='z-10 text-3xl cursor-pointer' onClick={filterData}>
                    <IoIosSearch />
                </div>
            </div>

            {
                (data.length === 0) ? (
                    <div>Lütfen Data basede bulunan bir ad giriniz</div>
                )
                    : (
                        <table className='w-full table-auto border-collapse text-lg ml-10 mt-10'>
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">ID</th>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Ad</th>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Soyad</th>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Email</th>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Departman No</th>
                                    <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Departman</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((element, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-3 py-2"> {element.id} </td>
                                            <td className="border border-gray-300 px-3 py-2"> {element.name} </td>
                                            <td className="border border-gray-300 px-3 py-2"> {element.surname} </td>
                                            <td className="border border-gray-300 px-3 py-2"> {element.email} </td>
                                            <td className="border border-gray-300 px-3 py-2"> {element.department_id} </td>
                                            <td className="border border-gray-300 px-3 py-2"> {element.department_name} </td>
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