import { useState } from "react";


function App() {
  //
	return (
    <>
		<div className="flex flex-col h-screen">

		<header className="bg-yellow-500 p-5 font-bold text-center text-xl shadow-md">
				RESTAURANT GENKO
		</header>

		<nav className="bg-green-700 p-1">
			<ul className="flex justify-around items-center text-sm font-semibold text-white">
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Home</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Category</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Add Category</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Cuisine</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Add Cuisine</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">Register / login</a></li>
				<li><a href="#link" className="transition duration-200 hover:text-yellow-300">support</a></li>
			</ul>
		</nav>

		<div className="flex-grow bg-amber-700 p-3">
			<div className="grid grid-cols-4 gap-3 h-full">
						
				<div className="col-span-1 flex flex-col gap-3">
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 1</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 3</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 5</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 7</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 9</div>
				</div>

				<div className="col-span-1 flex flex-col gap-3">
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 2</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 4</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 6</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 8</div>
						<div className="bg-amber-600 text-white h-full items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">image 10</div>
				</div>
						
				<div className="col-span-2 bg-amber-600 p-4 flex flex-col gap-4 font-semibold rounded-lg shadow-lg">
						<input type="text" placeholder="Search Bar" className="p-2 rounded bg-amber-100"/>
						<div className="flex-grow border text-center p-2 rounded text-white">Detail description</div>
						<div className="border text-right p-2 rounded text-white">Edit Cuisine<br/>Delete Cuisine</div>
				</div>

			</div>
		</div>

		<div className="bg-yellow-500 p-4 text-center font-semibold">
				page 1, 2, 3
		</div>

		</div>
		</>
  );
}

export default App;
