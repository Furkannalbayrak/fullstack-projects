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
      <div className='max-w-3xl mx-auto h-screen p-14'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 p-16 text-xl font-roboto rounded-3xl bg-white'>
          <input
            type="number"
            name='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder="Silmek istediğiniz kullanıcının ID'sini giriniz"/>
            

          <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition duration-100 p-2 rounded-3xl w-40 mx-auto text-white'>Sil</button>
        </form>
      </div>
    </div>
  )
}

export default DeleteUser