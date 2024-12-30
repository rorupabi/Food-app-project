import React, { useState } from 'react';
import { Data } from '../foodCol/data';

const FoodMenu = () => {
  const [foods, setFoods] = useState(Data);

  // Filter by type
  const filterType = (category) => {
    setFoods(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      Data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-4">
        {/* Filter by Type */}
        <div className="mb-4 lg:mb-0">
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <button onClick={() => setFoods(Data)} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">All</button>
            <button onClick={() => filterType('burger')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Burgers</button>
            <button onClick={() => filterType('pizza')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Pizza</button>
            <button onClick={() => filterType('salad')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Salads</button>
            <button onClick={() => filterType('chicken')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Chicken</button>
            <button onClick={() => filterType('desserts')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Desserts</button>
            <button onClick={() => filterType('drinks')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">Drinks</button>
          </div>
        </div>

        {/* Filter by Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <button onClick={() => filterPrice('$')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">$</button>
            <button onClick={() => filterPrice('$$')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">$$</button>
            <button onClick={() => filterPrice('$$$')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">$$$</button>
            <button onClick={() => filterPrice('$$$$')} className="border-orange-600 duration-300 text-orange-600 hover:bg-orange-600 hover:text-black px-4 py-2 border rounded">$$$$</button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
