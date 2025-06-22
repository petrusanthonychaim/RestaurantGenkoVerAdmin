import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { baseUrl } from "../api/baseURL.js";
import Toastify from "toastify-js";
import { useEffect, useState } from "react";
import loadingGif from "../assets/images/loading.svg";
import { Link } from "react-router";

export default function TableImages({ cuisine }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${baseUrl}/cuisine/delete/${cuisine.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      fetchProduct();
      Toastify({
        text: data.message,
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
        text: error.response.data.error,
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
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-48 object-cover"
          src={cuisine.imgURL}
          alt={`A plate of ${cuisine.name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/FFF/333?text=Image+Not+Found";
          }}
        />

        <div className="p-5">
          <h3 className="text-2xl font-bold text-amber-500 mb-2">
            {cuisine.name}
          </h3>
          <p className="text-gray-700 text-base">{cuisine.description}</p>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {cuisine.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
          {/*  */}
          <div className="mt-4 flex space-x-3 justify-end">
            <Link to={`/cuisine/show/${cuisine.id}`}>
              <button className="text-amber-400 hover:text-amber-600">
                <span className="material-symbols-outlined">edit</span>
              </button>
            </Link>
              <button className="text-amber-400 hover:text-amber-600"
              onClick={handleDelete}>
                <span className="material-symbols-outlined">delete</span>
              </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
