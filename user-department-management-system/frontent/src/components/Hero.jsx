import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className='w-full '>
            <div className='flex flex-col lg:flex-row lg:gap-14 gap-2 p-10 mx-auto w-11/12'>
                <div onClick={()=> navigate("/users/all-users")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>Tüm Kullanıcıları Listele</div>
                <div onClick={()=> navigate("/users/name")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>İsme Göre Listele</div>
                <div onClick={()=> navigate("/users/ID")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>ID'ye Göre Listele</div>
            </div>
        </div>
    )
}

export default Hero