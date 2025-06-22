export default function Button({ nameProp }) {

  return (
    <>
        <button
          type="submit"
          className="w-full flex border-2 border-white justify-center text-gray-800 text-lg font-bold p-4 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 transition duration-300 ease-in-out bg-yellow-400"
        >
          {nameProp}
        </button>

    </>
  );
}
