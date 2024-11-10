import React, { useState } from "react";
import img from "../../images/popupimg.jpg";

const CreateContestPopUp = ({ isOpen, setIsOpen, number }) => {
  // Initialize state with default values for properties not in form fields
  const [contestData, setContestData] = useState({
    ContestName: "League Square Contest", // Default value for ContestName
    TopTeamLabel: "Team A", // Default value for TopTeamLabel
    LeftTeamLabel: "Team B", // Default value for LeftTeamLabel
    square: number, // Default value for squares (e.g., 100 squares)
    email: "", // Default value for Email
    rules: "Standard rules apply.", // Default value for rules
    paymentMethod: "Credit Card", // Default value for payment method
    PlayerPassword: "password123", // Default value for Player Password
    contextImage: img, // Default value for context image (if applicable)
    prizeInfo: "Winner receives $100!", // Default value for prize information
    firstName: "", // Default value for First Name (included in the form)
    lastName: "", // Default value for Last Name (included in the form)
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const createContest = async (contestData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contest/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create contest");
      }

      const data = await response.json();
      return data; // Return the response data for further use
    } catch (error) {
      console.error("Error creating contest:", error);
      throw error; // Propagate error for handling in component
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await createContest(contestData); // Call the API function
      console.log("Contest created:", response); // Handle success (e.g., show a success message)
      setIsOpen(false); // Close the popup after successful creation
    } catch (error) {
      console.error("Error during contest creation:", error); // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        style={{ scrollbarWidth: "none" }}
        className={`fixed top-0 right-0 h-full md:w-[25%] overflow-y-auto bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
          <h2 className="text-lg font-bold">
            {number === "100"
              ? "100 Square Contest"
              : number === "25"
              ? "25 Square Contest"
              : number === "50"
              ? "50 Square Contest"
              : "League Square Squares"}
          </h2>
          <button className="text-gray-600 text-2xl" onClick={toggleSidebar}>
            &times;
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            {number === null
              ? "Ready to Create Your FREE Online League Square Squares Contest for the 2025 League Square?"
              : "Ready to Begin?"}
          </h3>
          <img
            style={{ display: number === "100" || number === null ? "" : "none" }}
            src={img}
            alt="Contest grid"
            className="w-full mb-4"
          />
          <h3 style={{ display: number === null ? "" : "none" }} className="text-xl font-semibold mb-4">
            Ready to Begin?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            The process takes 15 seconds and is free! Just fill out the form below and hit the button!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Your First Name</label>
              <input
                type="text"
                name="firstName" // Bind to state
                value={contestData.firstName} // Controlled component
                onChange={handleChange} // Handle input changes
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">Your Last Name</label>
              <input
                type="text"
                name="lastName" // Bind to state
                value={contestData.lastName} // Controlled component
                onChange={handleChange} // Handle input changes
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">Your Email</label>
              <input
                type="email"
                name="email" // Bind to state
                value={contestData.email} // Controlled component
                onChange={handleChange} // Handle input changes
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              style={{ backgroundColor: "rgb(99, 102, 241)" }}
              type="submit"
              className="w-[60%] text-[16px] hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Create My Contest!
            </button>
          </form>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>}
    </>
  );
};

export default CreateContestPopUp;
