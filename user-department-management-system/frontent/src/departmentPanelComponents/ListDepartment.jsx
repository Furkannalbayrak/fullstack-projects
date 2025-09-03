import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListDepartment() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const response = await axios.get("http://localhost:3000/departments");
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    },[])

    return (
        <div className='py-16'>
            <table className='w-8/12 mx-auto table-auto border-collapse lg:text-lg text-md'>
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Departman No</th>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-blue-100">Departman</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-3 py-2"> {element.id} </td>
                                <td className="border border-gray-300 px-3 py-2"> {element.department_name} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDepartment