import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TableImages from "../components/TableImages";
import TableContent from "../components/TableContent";

const AllCuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  // 
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/pub");

      // console.log(data.data);
      
      setCuisines(data.data.slice(0, 10));
    })();
  }, []);

  return (
    <>
      <div className="bg-amber-700 p-2 h-full">
        <div className="grid grid-cols-2 gap-2 ">
          {/*  */}

          <div className="grid grid-cols-2 gap-2">
            {cuisines.map((cuisine) => (
              <TableImages cuisine={cuisine} />
            ))}
          </div>

          <div className="grid gap-2">
            {/* <h1>Click Menu to see detail</h1> */}
            <div className="rounded-lg shadow-md">
              <TableContent cuisines={cuisines} />
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default AllCuisines;
