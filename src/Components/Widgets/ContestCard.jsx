// src/components/ContestCard.js
import React from 'react';

const ContestCard = ({ contest }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p className="text-gray-600">ID #{contest._id}</p>
      <h2 className="text-xl font-semibold mb-2">{contest.ContestName}</h2>
      <p className="text-gray-500">{contest.prizeInfo}</p>
      <div className="mt-2 text-sm text-gray-400">
        <p>{contest.createdAt}</p>
        <p>{contest.email}</p>
      </div>
    </div>
  );
};

export default ContestCard;
