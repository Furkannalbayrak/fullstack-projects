import React, { useState } from 'react'
import Register from './Register'

function Login() {

  const [showRegister, setShowRegister] = useState(false);
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

    // const endpoint = isLogin ? "/api/login" : "/api/register";
    //   const response = await axios.post(`http://localhost:3000${endpoint}`, formData);

    try {
      const response = await axios.post("http://localhost:3000/api/login", loginData)
      setLoginData({
        email: "",
        password: ""
      })
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
      <div className="relative w-full max-w-4xl h-[500px] shadow-2xl rounded-3xl overflow-hidden">

        {/* Sol Panel */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-white transition-transform duration-700 ease-in-out ${showRegister ? "translate-x-full" : "translate-x-0"
            }`}
        >
          {showRegister ? (
            <div>
              <p>merhabalkarrr</p>
            </div>
          ) : (
            <div>
              <h2 className="">Oturum Aç</h2>
              <p className="">Zaten üyeysen burası senin yerin. Giriş zamanı!</p>
              <form className="">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="">Oturum Aç</button>
              </form>
            </div>
          )
          }

        </div>

        {/* Sağ Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-red-400 transition-transform duration-700 ease-in-out ${showRegister ? "-translate-x-full" : "translate-x-0"
            }`}
        >
          <h2 className="">Yeni Misin?</h2>
          <p className="">
            Hesap oluştur ve aramıza katıl. Görevlerini listelemeye hemen başla.
          </p>
          <button
            onClick={() => setShowRegister(!showRegister)}
            className=""
          >
            {showRegister ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login