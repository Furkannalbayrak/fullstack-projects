import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AllUsers() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000");
                setData(response.data);
            } catch (error) {
                console.log("Veri alınamıyor", error)
            }
        };
        getData();
    }, []);

    return (
        <div className='pb-16'>
            <table className='w-10/12 mx-auto table-auto border-collapse lg:text-lg md:text-sm text-xs'>
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">ID</th>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">Ad</th>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">Soyad</th>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">Email</th>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">Departman No</th>
                        <th className="border border-gray-400 px-2 lg-px-4 py-2 text-left bg-blue-100">Departman</th>
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
        </div>

    )
}

export default AllUsers