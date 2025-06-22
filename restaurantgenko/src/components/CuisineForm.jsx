import axios from "axios";
import { baseUrl } from "../api/baseURL.js";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import Button from "./Button.jsx";

export default function CuisineForm({ cuisine, handleSubmit, propName }) {
  const [categories, setCategories] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    imgURL: "",
    categoryId: 0,
    authorId: 0,
  });
  //https://images.unsplash.com/photo-1586190848861-99aa4a171e90

  function handleInput(fieldName, e) {
    let value = e.target.value;
    if (
      fieldName === "price" ||
      fieldName === "categoryId"
    ) {
      value = +e.target.value;
    }

    setForm((oldValue) => {
      return {
        ...oldValue,
        [fieldName]: value,
      };
    });
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/categories/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategories(data?.data);
      setAuthorId(data?.userId);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (cuisine) {
      delete cuisine?.createdAt;
      delete cuisine?.updatedAt;
      delete cuisine?.id;
      delete cuisine?.Category;
      delete cuisine?.User;

      setForm((oldValue) => {
        return {
          ...oldValue,
          ...cuisine,
        };
      });
    }
  }, [cuisine]);

  useEffect(() => {
    if (!cuisine) {
      setForm((prevForm) => ({
        ...prevForm,
        authorId: authorId,
      }));
    }
  }, [authorId]);

  return (
    <>
      <form
        className="p-10 mt-5 border-2 border-white rounded-lg bg-amber-400"
        onSubmit={(e) => handleSubmit(e, form)}>
        <h1 className="text-2xl font-bold text-center mb-4">{propName}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              onChange={(e) => handleInput("name", e)}
              value={form?.name}
            />
          </div>
          <div>
            <label className="label">
              <span className="font-bold">Description</span>
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              onChange={(e) => handleInput("description", e)}
              value={form?.description}
            />
          </div>
          <div>
            <label className="label">
              <span className="font-bold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              onChange={(e) => handleInput("price", e)}
              value={form?.price}
            />
          </div>
          <div>
            <label className="label">
              <span className="font-bold">ImageURL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Image URL"
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              onChange={(e) => handleInput("imgURL", e)}
              value={form?.imgURL}
            />
          </div>
          {/*  */}
          <div>
            <label className="label">
              <span className="font-bold">Category Id</span>
            </label>
            <select
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              name="category"
              onChange={(e) => handleInput("categoryId", e)}
              value={form?.categoryId ? form?.categoryId : "select"}
            >
              <option value="select" disabled>
                Select Category
              </option>
              {categories.map((c) => {
                return (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/*  */}
          <div className="hidden">
            <label className="label">
              <span className="font-bold">Author Id</span>
            </label>
            <input
              type="text"
              className="rounded-lg w-full px-3 py-2 text-black border-2 border-white rounded-lg"
              onChange={(e) => handleInput("authorId", e)}
              value={form?.authorId}
            />
          </div>
        </div>
        <div className="mt-5">
          <Button nameProp={propName} />
        </div>
      </form>
    </>
  );
}
