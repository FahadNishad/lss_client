import React, { useState, useEffect } from 'react';
import ContestCard from '../Components/Widgets/ContestCard';
import Footer from "../Components/Footer";

const ViewContest = () => {
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [email, setEmail] = useState('');
  const [selectedContest, setSelectedContest] = useState(null); // State to track selected contest
  
  // Fetch contests from API
  const getContest = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contest/view`, {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        setContests(data);
        setFilteredContests(data); // Initially set the filteredContests as all contests
      } else {
        setContests([]);
        setFilteredContests([]);
      }
    } catch (error) {
      console.error('Error fetching contests:', error);
    }
  };

  useEffect(() => {
    getContest();
  }, []);

  // Filter contests by email and sort by creation date
  const handleSearch = () => {
    const filtered = contests
      .filter(contest => contest.email.toLowerCase() === email.toLowerCase()) // Filter by email (case-insensitive)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by creation date (descending)

    setFilteredContests(filtered);
  };

  // Handle contest selection for viewing
  const handleViewContest = (contest) => {
    setSelectedContest(contest);
  };

  // Handle back button to return to contest list
  const handleBack = () => {
    setSelectedContest(null);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Find a Contest</h1>

        {selectedContest ? (
          // Render the selected contest details
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Contest Details</h2>
            <p><strong>Contest Name:</strong> {selectedContest.ContestName}</p>
            <p><strong>Contest ID:</strong> #{selectedContest._id}</p>
            <p><strong>Description:</strong> {selectedContest.prizeInfo}</p>
            <p><strong>Created At:</strong> {new Date(selectedContest.createdAt).toLocaleString()}</p>
            <p><strong>Creator:</strong> {selectedContest.email}</p>

            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleBack}
            >
              Back to Contest List
            </button>
          </div>
        ) : (
          // Render the contest list and search input
          <>
            <div className="bg-purple-100 p-4 rounded-md shadow mb-6">
              <h2 className="text-lg font-semibold">Carlos Squares Contest</h2>
              <p className="mt-2">If this was the Contest you were looking for, click the button below:</p>
              <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded">Take Me There!</button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Search by Email</h2>
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 rounded w-[40%] mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Search
              </button>
            </div>

            <h2 className="text-xl font-bold mb-4">Search Results</h2>

            {filteredContests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredContests.map(contest => (
                  <div key={contest._id} className="cursor-pointer" onClick={() => handleViewContest(contest)}>
                    <ContestCard contest={contest} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No contests found for the provided email.</p>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewContest;
