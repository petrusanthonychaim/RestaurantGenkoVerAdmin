import DetailDescription from "./DetailDescription";
import { useOutletContext } from "react-router";

const TableContent = ({ cuisines }) => {
  // const { cuisines } = useOutletContext();

  return (
    <>
      <div className="relative rounded-lg shadow-lg w-full h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3298179/pexels-photo-3298179.jpeg"
          alt="Ramen bowl background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-plus-lighter"
        />

        <div className="relative p-2 flex flex-col gap-2 font-semibold">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Bar"
              className="w-full pl-4 pr-42 py-3 rounded-lg bg-orange-100 text-gray-700 placeholder-gray-500 shadow"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
              <button className="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
                Filter
              </button>
              <button className="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
                Sort
              </button>
              <i className="material-icons text-gray-500 text-lg cursor-pointer">
                search
              </i>
            </div>
          </div>

          <div className="flex-grow text-center rounded">
            <div className="border border-gray-600/50 text-sm rounded-md overflow-hidden bg-black/20 backdrop-blur-md shadow-lg">
              <DetailDescription cuisines={cuisines} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableContent;

// <div class="bg-amber-600 p-2 flex flex-col gap-2 font-semibold rounded-lg shadow-lg w-full h-full">
//   {/*  */}
//   <div class="relative">
//     <input
//       type="text"
//       placeholder="Search Bar"
//       class="w-full pl-4 pr-42 py-3 rounded-lg bg-orange-100 text-gray-700 placeholder-gray-500"
//     />
//     <div class="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
//       <button class="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
//         Filter
//       </button>
//       <button class="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
//         Sort
//       </button>
//       <i class="material-icons text-gray-500 text-lg cursor-pointer">
//         search
//       </i>
//     </div>
//   </div>

//   <div className="flex-grow text-center rounded text-white">
//     <div className="border border-gray-300 text-sm rounded-md overflow-hidden">
//         <DetailDescription cuisines={cuisines} />
//     </div>
//   </div>
//   </div>
