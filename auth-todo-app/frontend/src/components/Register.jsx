import React, { use, useState } from 'react'
import Login from './Login';

function Register() {

  const [showLogin, setShowLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", loginData)
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
    <div>
      <div className=''>
        <div className='w-screen p-10'>
          <div className='flex shadow-2xl border-2 border-black rounded-3xl overflow-hidden max-w-4xl mx-auto h-[500px]'>

            <div className={`flex w-[200%] transition-transform duration-500 ${showLogin ? "translate-x-1/2" : "translate-x-0"}`}>
              <div className='w-1/2 bg-red-400 h-full'>
                <div>
                  <div>
                    Oturum Aç
                  </div>
                  <div>
                    Zaten üyeysen burası senin yerin. Giriş zamanı!
                  </div>
                  <form onSubmit={handleSubmit} action="">
                    <input
                      type="text"
                      name='email'
                      placeholder='Email'
                      required
                      value={loginData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name='password'
                      placeholder='Password'
                      required
                      value={loginData.password}
                      onChange={handleChange}
                    />
                    {
                      errorMessage && <p>{errorMessage}</p>
                    }
                    <button type='submit'>Oturum Aç</button>
                  </form>
                </div>
              </div>

              <div className='w-1/2 bg-white h-full'>
                <div>
                  <div>
                    Yeni Misin?
                  </div>
                  <div>
                    Hesap oluştur ve aramıza katıl. Görevlerini listelemeye hemen başla.
                  </div>
                  <button onClick={() => setShowLogin(true)}>Kayıt Ol</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register