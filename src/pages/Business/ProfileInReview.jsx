import React from "react";
import { FaCheckCircle, FaClock, FaRegEnvelope } from "react-icons/fa";

const ProfileInReview = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center space-x-4">
          <FaCheckCircle className="text-green-500 text-5xl" />
          <h1 className="text-3xl font-semibold text-gray-800">
            Your Profile is Under Review
          </h1>
        </div>

        <p className="mt-4 text-lg text-gray-600">
          Thank you for submitting your profile! Our team is currently reviewing
          your information. We will get back to you within 24 hours with an
          update on your profile status.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaClock className="text-yellow-500 text-2xl" />
            <p className="text-gray-700 text-lg">
              <strong>Review Time:</strong> Your profile is being carefully
              reviewed, and this process typically takes up to 24 hours.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaRegEnvelope className="text-blue-500 text-2xl" />
            <p className="text-gray-700 text-lg">
              <strong>Email Notification:</strong> We will notify you via email
              once your profile has been accepted or if further information is
              needed.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg text-gray-600">
            <strong>Need Help?</strong> If you have any questions or concerns
            regarding the review process, feel free to contact our support team
            at{" "}
            <a href="mailto:support@example.com" className="text-blue-500">
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInReview;
