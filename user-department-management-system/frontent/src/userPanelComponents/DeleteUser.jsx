import React, { use, useState } from 'react'
import axios from 'axios';

function DeleteUser() {

  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/users/id/${id}`);
      alert("Kullanıcı başarıyla silindi");
      setId("");
      
    } catch (error) {
      console.error(error);
      alert("Bu ID'ye sahip bir kullanıcı bulunamadı");
    }
  }

  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='max-w-3xl mx-auto h-screen lg:p-14 p-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 lg:p-16 p-12 lg:text-xl md:text-lg text-md font-roboto rounded-3xl bg-white'>
          <textarea
            type="number"
            name='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none resize-none'
            placeholder="Silmek istediğiniz kullanıcının ID'sini giriniz"/>
            

          <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition duration-100 p-2 rounded-3xl w-40 mx-auto text-white'>Sil</button>
        </form>
      </div>
    </div>
  )
}

export default DeleteUser