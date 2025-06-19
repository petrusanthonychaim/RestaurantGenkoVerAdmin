import { Link } from "react-router";

const DetailDescription = ({ cuisines }) => {
  //
  return (
    <>
      {/*  */}
      <div className="font-sans flex bg-orange-100 border-gray-300">
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
        <div className="font-sans flex border-gray-300 text-sm">
          <div className="p-1 w-8 text-left text-gray-100 border-r border-b border-gray-300">
          {cuisine.id}
          </div>
          <div className="p-1 flex-1 text-left border-r border-b border-gray-300">
            <p className="font-bold text-gray-100 ">{cuisine.name}</p>
            <p className=" text-gray-100 text-xs mt-1">
            {cuisine.description}
            </p>
          </div>
          <div className="p-1 w-20 text-left border-b text-gray-100 hover:underline cursor-pointer">
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
