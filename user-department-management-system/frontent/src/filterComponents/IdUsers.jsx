import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function IdUsers() {

    const [getId, setGetId] = useState("")
    const [data, setData] = useState([]);

    const filterData = async () => {
        try {
            if (getId) {
                const response = await axios.get(`http://localhost:3000/users/id/${getId}`);
                setData(response.data);
            }
            else{
                setData([]);
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className='pb-16'>
            <div className='flex items-center -space-x-14 ml-8'>
                <input type="text" value={getId} onChange={(e) => setGetId(e.target.value)} className='w-1/2 text-xl bg-gray-200 pl-10 pr-20 py-3 rounded-full outline-none' placeholder="Aramak istediğiniz ID'yi giriniz" />
                <div className='z-10 text-3xl cursor-pointer' onClick={filterData}>
                    <IoIosSearch />
                </div>
            </div>

            {
                (data.length === 0) ? (
                    <div className='p-4 text-xl text-red-500 ml-6'>Lütfen Data basede bulunan bir ID giriniz</div>
                )
                    : (
                        <table className='w-10/12 table-auto border-collapse text-lg ml-10 mt-10'>
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

export default IdUsers