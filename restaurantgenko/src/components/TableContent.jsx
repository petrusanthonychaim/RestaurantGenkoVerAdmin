import DetailDescription from "./DetailDescription";
import { useOutletContext } from "react-router";

const TableContent = () => {
  const { cuisines } = useOutletContext();

  return (
    <>
      <div class="relative bg-amber-600 p-4 flex flex-col gap-4 font-semibold rounded-lg shadow-lg">
        {/*  */}
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search Bar"
            class="w-full pl-4 pr-42 py-3 rounded-lg bg-orange-100 text-gray-700 placeholder-gray-500"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
            <button class="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
              Filter
            </button>
            <button class="bg-orange-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-orange-300 transition-colors duration-200">
              Sort
            </button>
            <i class="material-icons text-gray-500 text-lg cursor-pointer">
              search
            </i>
          </div>
        </div>

        <div className="flex-grow text-center rounded text-white">
          <div className="border border-gray-500 text-sm rounded-md overflow-hidden">
              <DetailDescription cuisines={cuisines} />
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default TableContent;
