import React from 'react';
import Navigation from './presentation/components/Navigation/Navigation';
import ProductList from './presentation/components/ProductList/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
              <div className="mt-4 sm:mt-0">
                <div className="flex space-x-4">
                  <select className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>All Categories</option>
                    <option>Running</option>
                    <option>Basketball</option>
                    <option>Casual</option>
                  </select>
                  <select className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>Sort by</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
            <ProductList />
          </div>
        </div>
      </div>
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            2024 Shoe Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
