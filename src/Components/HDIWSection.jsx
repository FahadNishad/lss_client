import React from "react";

const HDIWSection = ({ setIsOpen, setNumber }) => {
  // Define the steps with titles, descriptions, and button flags
  const steps = [
    {
      stepNumber: "1",
      title: "Create a Contest",
      description: "Get your contest up and running in just 30 seconds.",
      button: true, // Indicates if a button should be rendered
    },
    {
      stepNumber: "2",
      title: "Tweak the Settings",
      description:
        "Tailor your contest to your needs, via dozens of available formats and options.",
      button: false, // No button for this step
    },
    {
      stepNumber: "3",
      title: "Invite Your Players",
      description:
        "Share your contest digitally via email, text messaging, and across social media.",
      button: false, // No button for this step
    },
    {
      stepNumber: "4",
      title: "Enjoy the Fun",
      description:
        "Follow the contest on game day to see if your numbers lead you to glory!",
      button: false, // No button for this step
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      <div
        className="text-center pb-4 mb-2 mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="text-3xl font-bold">How Does It Work?</h2>
        <p className="mb-4 text-gray-600">
          Anybody can run their own online Squares Contest at SBPS. You can make
          it as complex as you like, or just roll with the standard classic
          options.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-5 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-6 md:mb-0 md:w-1/5 relative"
          >
            {/* Step Number Circle */}
            <div className="flex flex-col items-center relative">
              <span className="flex items-center justify-center h-12 w-12 rounded-full text-gray-700 font-bold border border-gray-300 bg-white z-10">
                {step.stepNumber}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-center mb-4">{step.description}</p>
              {step.button && (
                <button
                  className="bg-[#6366f1] text-white hover:bg-blue-700 transition duration-200 py-2 px-4 rounded-lg"
                  onClick={() => {
                    setIsOpen(true);
                    setNumber("100");
                  }}
                >
                  Create a Squares Contest
                </button>
              )}
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="h-1 md:block hidden w-[130%] ml-[60%] bg-gray-300 absolute top-6 left-1/2 transform -translate-x-1/2 z-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HDIWSection;
