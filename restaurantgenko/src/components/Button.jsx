import { useNavigate } from "react-router";

export default function Button({ nameProp }) {
  const navigate = useNavigate;
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <>
      {nameProp === "Login" && (
        <button
          type="submit"
          className="w-full flex justify-center text-gray-800 text-lg font-bold p-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 transition duration-300 ease-in-out bg-yellow-500"
        >
          {nameProp}
        </button>
      )}

      {nameProp === "Register" && (
        <button
          type="submit"
          className="w-full flex justify-center bg-gray-100 text-gray-700 text-lg font-bold p-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        >
          {nameProp}
        </button>
      )}
    </>
  );
}
