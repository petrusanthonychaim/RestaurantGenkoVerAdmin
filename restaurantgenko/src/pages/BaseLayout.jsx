import { Outlet } from "react-router";
import Navbar from "./NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import Toastify from 'toastify-js'

export default function BaseLayout() {
  const navigate = useNavigate();

  useEffect(() => {}, [navigate]);

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
