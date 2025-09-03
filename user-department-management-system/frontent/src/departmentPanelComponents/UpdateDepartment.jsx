import React, { useState } from 'react'
import axios from 'axios'

function UpdateDepartment() {

  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    department_name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/departments/id/${id}`, formData);
      alert("Departman başarıyla güncellendi");
      setFormData({
        department_name: "",
      })
      setId("");

    } catch (error) {
      console.error(error);
      alert("Bu ID'ye sahip bir departman bulunamadı")
    }
  }

  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='max-w-3xl mx-auto h-screen lg:p-14 p-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 lg:p-16 p-12 lg:text-xl text-lg font-roboto rounded-3xl bg-white'>
          <textarea
            type="number"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none resize-none'
            placeholder="Güncellemek istediğiniz departmanın ID'sini giriniz" />

          <input
            type="text"
            name='department_name'
            value={formData.department_name}
            required
            onChange={handleChange}
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder='Ad giriniz' />

          <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition duration-100 p-2 rounded-3xl w-40 mx-auto text-white mt-5'>Güncelle</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateDepartment