import { Link } from "react-router";

const DetailDescription = ({ cuisines }) => {
  //
  return (
    <>
      {/*  */}
      <div className="flex bg-orange-100 border-b border-gray-300">
        <div className="p-1 w-8 text-left font-semibold text-gray-800 border-r border-gray-300">
          No.
        </div>
        <div className="p-1 flex-1 text-left font-semibold text-gray-800 border-r border-gray-300">
          Menu
        </div>
        <div className="p-1 w-20 text-left font-semibold text-gray-800">
          Action
        </div>
      </div>

      {/*  */}
      {/* {JSON.stringify(cuisines)} */}
      {cuisines.map((cuisine) => (
        <div className="flex border-b border-gray-300 text-sm">
          <div className="p-1 w-8 text-left text-white border-r border-gray-300">
          {cuisine.id}
          </div>
          <div className="p-1 flex-1 text-left border-r border-gray-300">
            <p className="font-bold text-white ">{cuisine.name}</p>
            <p className=" text-gray-800 text-xs mt-1">
            {cuisine.description}
            </p>
          </div>
          <div className="p-1 w-20 text-left text-sm text-white hover:underline cursor-pointer">
          <Link to ={`/cuisine/show/${cuisine.id}`} >
            See Detail
          </Link>
          </div>
        </div>
      ))}
      {/*  */}
    </>
  );
};

export default DetailDescription;
