import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <ul className="flex justify-around items-center text-sm font-semibold text-white ">
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Category
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Add Category
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Cuisine
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Add Cuisine
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Register / Login
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition duration-200 hover:text-yellow-300"
          >
            Support
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
