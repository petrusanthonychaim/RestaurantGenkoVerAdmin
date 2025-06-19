import axios from "axios";
import { Outlet } from "react-router";
import NavBar from "../src/components/NavBar";
import { useState, useEffect } from "react";
import TableImages from "../src/components/TableImages";
import TableContent from "../src/components/TableContent";
import DetailDescription from "../src/components/DetailDescription";

const RootLayout = () => {
  const [cuisines, setCuisines] = useState([]);
  //
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/pub");

      // console.log(data.data);
      // menggunakan props, kirim loader

      setCuisines(data.data.slice(0, 10));
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        {/*  */}
        <header className="bg-yellow-500 p-5 font-bold text-center text-xl shadow-md">
          RESTAURANT GENKO
        </header>

        <nav className="bg-green-700 p-1">
          <NavBar />
        </nav>

        <div className="flex-grow bg-amber-700 p-2">
          <div className="grid grid-cols-2 gap-2 h-full">
            {/*  */}

            <div className="grid grid-cols-2 gap-2 h-full">
              {cuisines.map((cuisine) => (
                <TableImages cuisine={cuisine} />
              ))}
            </div>

            <div className="grid gap-2 h-full">
              {/* <h1>Click Menu to see detail</h1> */}
              <div className="w-full max-w-3xl rounded-lg shadow-md p-1">
                <Outlet context={cuisines}/>
              </div>
            </div>

            {/*  */}
          </div>
        </div>

        {/*  */}
        <div className="bg-yellow-500 p-2 text-center font-semibold">
          page 1, 2, 3
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default RootLayout;
