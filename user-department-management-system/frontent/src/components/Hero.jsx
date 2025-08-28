import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className='flex gap-14 p-10 mx-auto'>
                <div onClick={()=> navigate("/all-users")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>Tüm Kullanıcıları Listele</div>
                <div onClick={()=> navigate("/name")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>İsme Göre Listele</div>
                <div onClick={()=> navigate("/ID")} className='bg-gray-200 px-5 py-3 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-xl'>ID'ye Göre Listele</div>
            </div>
        </div>
    )
}

export default Hero