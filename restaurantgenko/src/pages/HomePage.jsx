import axios from "axios";
import { useState, useEffect } from "react";
import TableImages from "../components/TableImages";
import loadingGif from "../assets/images/loading.svg";
import { baseUrl } from "../api/baseURL";

import Toastify from "toastify-js";

export default function HomePage() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1714029198827-b71f439dd5dc?q=80&w=1920&auto=format&fit=crop";
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // CATEGORIES STATE
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  //PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const pagination = handlePagination();

  // STYLE
  const mainActionButtonStyles =
    "px-5 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-200 hover:scale-105";
  const activeSortButtonStyles =
    "bg-amber-600 ring-2 ring-offset-2 ring-amber-600";
  const buttonBaseStyles =
    "flex items-center justify-center rounded-md font-semibold transition-colors duration-200";
  const prevNextButtonStyles = `${buttonBaseStyles} gap-x-2 px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed`;
  const pageButtonDefaultStyles = `${buttonBaseStyles} size-10 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white`;
  const pageButtonActiveStyles = `${buttonBaseStyles} size-10 bg-yellow-500 text-white border-2 border-yellow-500`;
  const ellipsisStyles =
    "flex items-center justify-center size-10 px-2 text-gray-500";
  const categoryButtonBase =
    "px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200";
  const activeCategoryStyles = "bg-amber-400 text-white shadow-md";
  const defaultCategoryStyles =
    "bg-white text-gray-700 hover:bg-amber-100 shadow";

  //FETCH CUISINE &FILTER
  async function fetchCuisines() {
    try {
      setLoading(true);
      let webUrl = `${baseUrl}/pub?page[size]=10&page[number]=${currentPage}&search=${search}`;
      if (selectedCategory) {
        webUrl += `&filter=${selectedCategory}`;
      }
      if (sortOrder) {
        webUrl += `&sort=${sortOrder}`;
      }

      const { data } = await axios.get(webUrl);

      setCuisines(data?.data);
      setCurrentPage(data?.page);
      setTotalPage(data?.totalPage);

      // console.log(data?.data);
      // console.log(data?.page);
      // console.log(data?.totalPage);
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
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCuisines();
  }, [currentPage, selectedCategory, sortOrder]);

  //FETCH CATEGORIES
  async function fetchCategories() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/categories/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategories(data?.data);
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
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, [currentPage]);

  // console.log(cuisines);
  // console.log(categories);

  async function handleAddCategory(event) {
    event.preventDefault();

    if (!newCategoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }

    // UPDATED TO SERVER
    try {
      setLoading(true);
      const newCategory = { name: newCategoryName };
      await axios.post(`${baseUrl}/categories/addForm`, newCategory, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setNewCategoryName("");

      await fetchCategories();
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
    } finally {
      setLoading(false);
    }
  }

  function handleSort(direction) {
    if (sortOrder === direction) {
      setSortOrder("");
    } else {
      setSortOrder(direction);
    }
    setCurrentPage(1);
  }

  function handlePagination() {
    let arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }

    return arr;
  }

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSelectedCategory(null);
    setCurrentPage(1);
    fetchCuisines();
  }

  function handleCategorySelect(categoryId) {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  }

  return (
    <>
      {/* PARENT NAVBAR */}

      {/* BODY */}
      <div
        className="relative w-full min-h-full py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed "
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 container mx-auto">
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="Search all dishes..."
              className="w-full h-10 pl-6 pr-40 py-4 rounded-full text-lg text-gray-800 bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
            />
            <div className="absolute inset-y-0 right-0 pr-5 flex items-center">
              <i
                onClick={handleSearch}
                className="material-icons text-3xl text-gray-500 cursor-pointer"
              >
                search
              </i>
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
            <button
              onClick={() => setShowCategoryFilter(!showCategoryFilter)}
              className={mainActionButtonStyles}
            >
              {showCategoryFilter ? "Hide Categories" : "Show Categories"}
            </button>

            <button
              onClick={() => handleSort("createdAt")}
              className={`${mainActionButtonStyles} ${
                sortOrder === "createdAt" ? activeSortButtonStyles : ""
              }`}
            >
              Asc
            </button>
            <button
              onClick={() => handleSort("-createdAt")}
              className={`${mainActionButtonStyles} ${
                sortOrder === "-createdAt" ? activeSortButtonStyles : ""
              }`}
            >
              Desc
            </button>
          </div>

          {showCategoryFilter && (
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-lg mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`${categoryButtonBase} ${
                    selectedCategory === null
                      ? activeCategoryStyles
                      : defaultCategoryStyles
                  }`}
                >
                  All Cuisines
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`${categoryButtonBase} ${
                      selectedCategory === cat.id
                        ? activeCategoryStyles
                        : defaultCategoryStyles
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
                {/*  */}
                <form onSubmit={handleAddCategory}>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Category Name"
                    className="px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    autoFocus
                  />
                  {/*  */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${categoryButtonBase} bg-green-700 text-white hover:bg-green-600`}
                  >
                    {loading ? "Adding ..." : "+ Add Category"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {loading ? (
            <>
              <div className="flex justify-center w-screen h-screen">
                <img src={loadingGif} className="w-1/4" />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cuisines?.map((cuisine) => (
                <TableImages
                  key={cuisine.id}
                  cuisine={cuisine}
                  fetchCuisines={fetchCuisines}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PAGINATION */}
      <nav
        className="flex items-center justify-center gap-x-2 my-8"
        aria-label="Pagination"
      >
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={prevNextButtonStyles}
        >
          <span>Prev</span>
        </button>

        <div className="flex items-center gap-x-2">
          {pagination.map((page, index) => {
            if (typeof page === "string") {
              return (
                <span key={`ellipsis-${index}`} className={ellipsisStyles}>
                  ...
                </span>
              );
            }
            return (
              <button
                type="button"
                className={
                  currentPage === page
                    ? pageButtonActiveStyles
                    : pageButtonDefaultStyles
                }
                key={page}
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className={prevNextButtonStyles}
          onClick={handleNext}
          disabled={currentPage >= totalPage}
        >
          <span>Next</span>
        </button>
      </nav>
    </>
  );
}
