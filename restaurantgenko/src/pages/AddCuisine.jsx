import axios from "axios";
import { baseUrl } from "../api/baseURL.js";
import Toastify from "toastify-js";
import { useNavigate } from "react-router";
import CuisineForm from "../components/CuisineForm";

export default function AddPage() {
  const navigate = useNavigate();

  async function handleSubmit(e, form) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/cuisine/addForm`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate("/");
      Toastify({
        text: `Succeed add new data ${data?.data.name}`,
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
      <CuisineForm handleSubmit={handleSubmit} propName="Add Cuisine" />
    </>
  );
}
