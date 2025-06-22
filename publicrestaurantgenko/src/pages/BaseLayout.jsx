import { Outlet } from "react-router";
import Navbar from "./NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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
