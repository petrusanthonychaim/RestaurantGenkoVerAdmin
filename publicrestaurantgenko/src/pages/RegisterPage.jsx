import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { baseUrl } from "../api/baseURL";
import Toastify from "toastify-js";

export default function RegisterPage() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU4OTN8MHwxfGFsbHx8fHx8fHx8fDE2ODg2NjI0MDB8&ixlib=rb-4.0.3&q=80&w=1080";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "Staff",
    phoneNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/users/register`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      navigate("/");
      Toastify({
        text: "Registration successful!",
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
        text:
          error.response?.data?.message ||
          "Registration failed. Please try again.",
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-chango">
            <span className="text-amber-400">あ</span>{" "}
            <span className="text-gray-900">RESTAURANT GENKO </span>
            <span className="text-amber-400">げんこ</span>
          </h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="yourmail@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="********"
              required
              minLength="5"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter phone number 081299887711"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your full address"
              required
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300 disabled:bg-yellow-300"
            >
              {loading ? "Registering..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
