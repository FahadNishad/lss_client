import React from "react";

const rulesData = [
  {
    title: "General Rules",
    description:
      "The commissioner has not defined general rules for this contest. Please email them directly with any questions you may have.",
    buttonLabel: "Edit Rules",
  },
  {
    title: "Prizes",
    description:
      "The commissioner has not defined guidelines for how prizes are defined or awarded. Please email them directly with any questions you may have.",
    buttonLabel: "Edit Prizes",
  },
  {
    title: "Payments",
    description:
      "The commissioner has not defined guidelines for how to pay for your entry. Please email them directly with any questions you may have.",
    buttonLabel: "Edit Payments",
  },
  {
    title: "Payment Options",
    description:
      "The commissioner has not defined the cost to enter this contest.\n\nThe commissioner has not provided any detail regarding preferred method of payment.\n\nPlease contact the commissioner directly with any specific questions regarding this contest, including how to pay for your entry.",
    buttonLabel: "Edit Options",
  },
];

const ContestRules = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#474747" }}>
        Rules
      </h1>
      <div className="space-y-6">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white bg-gray-900 px-4 py-2 rounded-lg">
                {rule.title}
              </h3>
              <button
                className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                onClick={() => alert(`Editing: ${rule.title}`)}
              >
                {rule.buttonLabel}
              </button>
            </div>
            <p className="text-gray-700 whitespace-pre-line">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestRules;
