import { NavLink, Link, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("users/login");
  }

  return (
    <>
      <div className="relative text-center h-30 flex items-baseline-last">
        <h2 className="absolute inset-0 flex items-center justify-center font-chango text-5xl">
          <span className="text-amber-400 text-shadow-md">あ</span>{" "}
          <span className="text-gray-900">RESTAURANT GENKO </span>
          <span className="text-amber-400 text-shadow-md">げんこ</span>
        </h2>
      </div>

      <nav className="bg-amber-400 p-2">
        <ul className="flex justify-around items-center text-m font-semibold text-white list-image-[url(./assets/images/b.png)]">
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cuisine/addForm"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Add Cuisine
            </Link>
          </li>
          <li>
            <Link
              to="/users/login"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Register / Login
            </Link>
          </li>
          <li>
            <a onClick={handleLogout} className="text-green-700">
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
