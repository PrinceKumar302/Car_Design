import React from 'react';

const ResaleScreen = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Car Resale Value</h2>
      <img src="/car-resale.png" alt="Car Resale" className="w-full rounded-xl mb-4" />
      <div className="bg-white p-4 shadow-md rounded-xl">
        <p className="text-gray-700 text-sm">Estimated Resale:</p>
        <p className="text-xl font-bold text-green-600">₹4,20,000</p>
      </div>
    </div>
  );
};

export default ResaleScreen;