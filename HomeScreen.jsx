import React from 'react';

const HomeScreen = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome to GlideDrive</h1>
      <img src="/car-main.png" alt="Main Car" className="w-64 mx-auto mb-6" />
      <div className="grid grid-cols-3 gap-4 bg-white shadow-md p-4 rounded-xl">
        <div className="text-center">
          <p className="text-gray-600 text-sm">Fuel</p>
          <p className="text-lg font-semibold text-gray-900">78%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">KM Driven</p>
          <p className="text-lg font-semibold text-gray-900">12,500</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Service</p>
          <p className="text-lg font-semibold text-gray-900">Due</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;