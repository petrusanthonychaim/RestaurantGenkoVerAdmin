import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/baseURL";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Button from "../components/Button";
import Toastify from "toastify-js";

export default function LoginPageAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.access_token) {
      Toastify({
        text: "You already logged in",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#f5b300",
          color: "black",
          border: "solid #FFFFFF",
          borderRadius: "10px",
        },
      }).showToast();
      navigate("/");
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/users/login`, {
        email,
        password,
      });
      localStorage.setItem("access_token", data?.access_token);
      navigate("/");
      Toastify({
        text: "Succeed Login",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#f5b300",
          color: "black",
          border: "solid #FFFFFF",
          borderRadius: "10px",
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#f5b300",
          color: "black",
          border: "solid #FFFFFF",
          borderRadius: "10px",
        },
      }).showToast();
    }
  }

  return (
    <>
      <div className="bg-yellow-50">
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU4OTN8MHwxfGFsbHx8fHx8fHx8fDE2ODg2NjI0MDB8&ixlib=rb-4.0.3&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-2xl shadow-lg m-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 font-chango">
                <span className="text-amber-400">あ</span>{" "}
                <span className="text-gray-900">RESTAURANT GENKO </span>
                <span className="text-amber-400">げんこ</span>
              </h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-700 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full mt-2 px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-700"
                  placeholder="yourmail@edu.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-gray-700 tracking-wide"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full mt-2 px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-700"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Button nameProp="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

//bg-yellow-500
