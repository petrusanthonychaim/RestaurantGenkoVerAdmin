import { useNavigate } from "react-router";
import axios from "axios";
import { baseUrl } from "../api/baseURL.js";
import Toastify from "toastify-js";
import { useRef, useState } from "react";
import loadingGif from "../assets/images/loading.svg";
import { Link } from "react-router";

export default function TableImages({ cuisine, fetchCuisines }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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

      fetchCuisines();
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
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    try {
      await axios.patch(`${baseUrl}/cuisine/upload/${cuisine.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      await fetchCuisines();

      Toastify({ 
        text: "Image uploaded successfully!",
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
        text: error.response?.data?.message || "Upload failed",
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
  }

  function triggerFileSelect() {
    fileInputRef.current.click();
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        {loading && (
          <div className="flex justify-center w-screen h-screen">
            <img src={loadingGif} className="w-1/4" />
          </div>
        )}
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
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
              accept="image/png, image/jpeg"
            />
            <button
              className="text-amber-400 hover:text-amber-600"
              onClick={triggerFileSelect}
              title="Upload Image"
            >
              <span className="material-symbols-outlined">upload_file</span>
            </button>
            <Link to={`/cuisine/show/${cuisine.id}`}>
              <button className="text-amber-400 hover:text-amber-600">
                <span className="material-symbols-outlined">edit</span>
              </button>
            </Link>
            <button
              className="text-amber-400 hover:text-amber-600"
              onClick={handleDelete}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
