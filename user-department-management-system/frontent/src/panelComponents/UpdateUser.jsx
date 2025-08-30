import React, { useState } from 'react'
import axios from 'axios';

function UpdateUser() {

  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    department_id: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, formData);
      alert("Kullanıcı başarıyla güncellendi");
      setFormData({
        name: "",
        surname: "",
        email: "",
        department_id: "",
      })
      setId("");

    } catch (error) {
      console.error(error);
      alert("Bu ID'ye sahip bir kullanıcı bulunamadı");
    }
  }

  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='max-w-3xl mx-auto h-screen p-14 '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 p-16 text-xl font-roboto rounded-3xl bg-white'>
          <input
            type="text"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder="Güncellemek istediğiniz kullanıcının ID'sini giriniz" />

          <input
            type="text"
            name='name'
            value={formData.name}
            required
            onChange={handleChange}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder='Ad giriniz' />

          <input
            type="text"
            name='surname'
            value={formData.surname}
            required
            onChange={handleChange}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder='Soyad giriniz' />

          <input
            type="email"
            name='email'
            value={formData.email}
            required
            onChange={handleChange}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder='Email giriniz' />

          <input
            type="text"
            name='department_id'
            value={formData.department_id}
            onChange={handleChange}
            pattern='[1-8]?'
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder='Departman numarası giriniz (1-8) veya boş bırakın' />

          <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition duration-100 p-2 rounded-3xl w-40 mx-auto text-white mt-5'>Güncelle</button>
        </form>
      </div>
    </div>

  )
}

export default UpdateUser