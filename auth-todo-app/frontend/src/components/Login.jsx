import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChangeLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRegister = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3000/api/login", loginData)
      setLoginData({
        email: "",
        password: ""
      })
      setSuccessMessage(response.data.message);
      localStorage.setItem("token", response.data.token);

      navigate("/home");

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
      }
      else {
        setErrorMessage("Sunucuya Bağlanılamadı");
      }
      console.error(error.message);
    }
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/register", registerData)
      setRegisterData({
        name: "",
        email: "",
        password: ""
      });
      setSuccessMessage(response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
      }
      else {
        setErrorMessage("Sunucuya Bağlanılamadı");
      }
      console.error(error.message);
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">

      {successMessage && (
        <p className='absolute left-1/2 transform -translate-x-1/2 top-8 text-lg p-4 bg-green-400 rounded-xl w-[600px] text-center'>{successMessage}</p>
      )}

      <div className="relative w-full max-w-4xl h-[500px] shadow-2xl rounded-3xl overflow-hidden">
        {/* Sol Panel */}
        <div
          className={`absolute top-0 left-0 md:w-1/2 w-full h-full bg-white transition-transform duration-700 ease-in-out ${showRegister ? "translate-x-full" : "translate-x-0"
            }`}
        >
          {showRegister ? (
            <div className='max-w-sm mx-auto text-center bg-white p-8 mt-4'>
              <h2 className='text-4xl font-extrabold text-center text-gray-600 mb-6'>Hesap Oluştur</h2>
              <p className='text-center text-gray-600 mb-6'>Görevlerini kolayca ekle, düzenle ve hayatını daha planlı hale getir.</p>
              <form onSubmit={handleSubmitRegister}>
                <input
                  type="text"
                  name='name'
                  placeholder='Ad'
                  value={registerData.name}
                  onChange={handleChangeRegister}
                  required
                  className='w-full px-4 py-[10px] mt-4 bg-gray-200 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-indigo-500'
                />
                <input
                  type="email"
                  name='email'
                  placeholder='Email'
                  value={registerData.email}
                  onChange={handleChangeRegister}
                  required
                  className='w-full px-4 py-[10px] mt-4 bg-gray-200 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-indigo-500'
                />
                <input
                  type="password"
                  name='password'
                  placeholder='Password'
                  value={registerData.password}
                  onChange={handleChangeRegister}
                  required
                  minLength={5}
                  className='w-full px-4 py-[10px] mt-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-indigo-500'
                />
                {errorMessage && (
                  <p className='absolute text-red-500 text-lg left-1/2 transform -translate-x-1/2 w-full'>{errorMessage}!</p>
                )}
                <button type='submit' className='w-1/2 py-3 bg-red-500 mt-8 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'>Kayıt Ol</button>
              </form>
            </div>
          ) : (
            <div className="max-w-sm mx-auto text-center bg-white p-8 mt-10">
              <h2 className="text-4xl font-extrabold text-center text-gray-600 mb-6">Oturum Aç</h2>
              <p className="text-center text-gray-600 mb-6">Zaten üyeysen burası senin yerin. Giriş zamanı!</p>
              <form onSubmit={handleSubmitLogin} className='relative'>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleChangeLogin}
                  required
                  className="w-full px-4 py-[10px] mt-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChangeLogin}
                  required
                  className="w-full px-4 py-[10px] mt-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-indigo-400"
                />
                {errorMessage && (
                  <p className='absolute text-red-500 text-lg left-1/2 transform -translate-x-1/2 mt-1 w-full'>{errorMessage}!</p>
                )}
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-red-500 mt-10 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                >
                  Oturum Aç
                </button>
              </form>
            </div>
          )
          }
        </div>

        {/* Sağ Panel */}
        <div
          className={`absolute top-0 hidden md:block left-1/2 w-1/2 h-full bg-red-400 transition-transform duration-700 ease-in-out ${showRegister ? "-translate-x-full" : "translate-x-0"
            }`}
        >
          {showRegister ? (
            <div className='text-white p-8 max-w-sm mx-auto text-center mt-24'>
              <h2 className='text-4xl font-bold mb-4'>Tekrar Hoş Geldin!</h2>
              <p className='text-lg mb-6'>Zaten bir hesabın varsa hemen giriş yapabilirsin.</p>
              <button
                onClick={() => setShowRegister(!showRegister)}
                className='w-1/2 py-3 bg-red-400 border-2 border-white text-white font-semibold rounded-full hover:bg-red-500 transition duration-300'
              >
                Giriş Yap
              </button>
            </div>
          ) : (
            <div className="text-white p-8 max-w-sm mx-auto text-center mt-24">
              <h2 className="text-4xl font-bold mb-4">Yeni Misin?</h2>
              <p className="text-lg mb-6">Hesap oluştur ve aramıza katıl. Görevlerini listelemeye hemen başla.</p>
              <button
                onClick={() => setShowRegister(!showRegister)}
                className="w-1/2 py-3 bg-red-400 border-2 border-white text-white font-semibold rounded-full hover:bg-red-500 transition duration-300"
              >
                Kayıt Ol
              </button>
            </div>
          )
          }

        </div>

      </div>
    </div>
  )
}

export default Login