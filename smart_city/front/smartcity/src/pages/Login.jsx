import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/home");
    }
  }, []);

  const handleLogin = () => {
    axios.post('http://localhost:8000/api/token/', {
      username,
      password,
    })
      .then((res) => {
        localStorage.setItem('token', res.data.access);
        navigate('/home');
      })
      .catch(console.log)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-800 to-black p-4 gap-20">
      <div className="flex items-center justify-center">
      <img src={logo} alt="Logo Olyvia" className="w-25 h-25 rounded" />
      <h1 className="text-white text-6xl ml-7">olyvia</h1>
      </div>
      <div className="w-[500px] p-8 flex flex-col justify-center bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form className="flex flex-col gap-4">
            <div className="flex items-center bg-gray-100 border rounded-lg px-3 py-2">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="text"
                placeholder="Usuário"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex items-center bg-gray-100 border rounded-lg px-3 py-2">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="password"
                placeholder="Senha"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded-lg w-full"
              onClick={handleLogin}
            >
              Entrar
            </button>

            <button
              type="button"
              className="bg-white text-black font-semibold py-2 rounded-lg border w-full mt-4"
            >
              Cadastre-se
            </button>

            <p className="text-sm text-center text-gray-500 mt-2 cursor-pointer hover:underline">
              Esqueceu a Senha?
            </p>
          </form>
        </div>
    </div>
  );
}