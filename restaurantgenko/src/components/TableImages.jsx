import { Link } from "react-router";

const TableImages = ({cuisine}) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg 
             transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:-translate-y-2">
            {/*  */}
            <Link to={`/cuisine/show/${cuisine.id}`}>
            <img 
            src={cuisine.imgURL} 
            alt={cuisine.name} 
            className="w-full h-40 object-cover" />

            <div className="absolute bottom-0 left-0 right-0 bg-amber-600">
              <p className="text-sm text-white text-center font-semibold">{cuisine.name}</p>
            </div>
            </Link>

            {/*  */}
      </div>
    </>
  );
};

export default TableImages