import React, { useState } from 'react'
import axios from 'axios';

function AddDepartment() {

  const [formData, setFormData] = useState({
    department_name: "",
  });
  
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3000/departments/add-department", formData);
      alert("Departman başarıyla eklendi");
      setData("");

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='max-w-3xl mx-auto h-screen lg:p-14 p-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 lg:p-16 p-12 lg:text-xl text-lg font-roboto rounded-3xl bg-white'>
          <input
            type="text"
            name='department_name'
            value={formData.department_name}
            onChange={handleChange}
            required
            className='bg-gray-200 px-5 py-3 rounded-lg outline-none'
            placeholder="Departman Adı giriniz "/>

          <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition duration-100 p-2 rounded-3xl w-40 mx-auto text-white'>Ekle</button>
        </form>
      </div>
    </div>
  )
}

export default AddDepartment