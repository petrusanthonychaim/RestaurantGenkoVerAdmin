import { Link } from "react-router";

const TableImages = ({ cuisine }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-48 object-cover"
          src={cuisine.imgURL}
          alt={`A plate of ${cuisine.name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/FFF/333?text=Image+Not+Found";
          }}
        />

        <div className="p-5">
          <h3 className="text-2xl font-bold text-amber-500 mb-2">
            {cuisine.name}
          </h3>
          <p className="text-gray-700 text-base">{cuisine.description}</p>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {cuisine.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableImages;
