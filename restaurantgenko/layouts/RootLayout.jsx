import axios from "axios";
import { Outlet } from "react-router";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import { useState, useEffect } from "react";

const RootLayout = () => {
  //

  return (
    <>
      <div className="flex flex-col h-screen">
        {/*  */}

        <NavBar />
        <div className="flex-grow">
        <Outlet />
        </div>
        <div className="flex-shrink-0">
        <Footer />
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default RootLayout;
