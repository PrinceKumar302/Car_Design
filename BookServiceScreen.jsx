import React from 'react';

const BookServiceScreen = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Book Service</h2>
      <img src="/car-service.png" alt="Service" className="w-full rounded-xl mb-4" />
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Service Type</p>
          <p className="text-lg font-semibold text-gray-900">Periodic Service</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Date</p>
          <p className="text-lg font-semibold text-gray-900">19 July 2025</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-lg font-semibold text-gray-900">Scheduled</p>
        </div>
      </div>
    </div>
  );
};

export default BookServiceScreen;