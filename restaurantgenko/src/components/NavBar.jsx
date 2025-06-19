import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      {/*  */}
      <div class="relative text-center bg-yellow-500 h-30 flex items-baseline-last">
        <img
          className ="w-100 mx-auto"
          src="https://www.pngplay.com/wp-content/uploads/12/Katana-Transparent-Free-PNG.png"
          alt="Katana"
        />

        <h2 class="absolute inset-0 flex items-center justify-center font-chango text-6xl text-amber-200 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
          あ RESTAURANT GENKO げんこ
        </h2>
      </div>

      <nav className="bg-green-700 p-1">
        <ul className="flex justify-around items-center text-sm font-semibold text-white list-image-[url(./assets/images/b.png)]">
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
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Add Category
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Cuisine
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Add Cuisine
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Register / Login
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="transition duration-200 hover:text-yellow-300 hover:animate-pulse"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
