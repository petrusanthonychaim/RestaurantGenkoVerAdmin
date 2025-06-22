import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { baseUrl } from "../api/baseURL.js";
import Toastify from "toastify-js";
import CuisineForm from "../components/CuisineForm";
import { useEffect, useState } from "react";

export default function EditPage() {
  const [cuisine, setCuisine] = useState({});
  const { id } = useParams();
  const navigate = useNavigate("");
  const [loading, setLoading] = useState(true);

  async function fetchCuisineId() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/cuisine/show/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCuisine(data?.data);
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

  async function handleSubmit(e, form) {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${baseUrl}/cuisine/show/${id}`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      navigate("/");
      Toastify({
        text: `Succeed edit data ${data?.data.name}`,
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

  useEffect(() => {
    fetchCuisineId();
  }, []);

  return (
    <>
      <CuisineForm
        cuisine={cuisine}
        handleSubmit={handleSubmit}
        propName="Edit Cuisine"
      />
    </>
  );
}
