import { useState } from "react";
import Image from "next/image";
interface PayMaxModalProps {
  onClose: () => void;
}

const PayMaxModal = ({ onClose }: PayMaxModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl">
        <div className="bg-purple-600 p-5 text-white">
          <h2 className="text-2xl text-center font-bold">
            Contestant Application Process
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600 text-lg">
                Step 1: Download PayMax
              </h3>
              <p className="text-gray-600 mt-1">
                Get started by downloading the PayMax app from your App store or
                Play Store.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600 text-lg">
                Step 2: Complete Registration
              </h3>
              <p className="text-gray-600 mt-1">
                Create your account and verify your details to proceed.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-blue-800 text-center font-medium">
              All applications are securely processed through PayMax for your
              protection.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-4">
            <a href="#">
              <img
                src="/AppStoreLogo.svg"
                alt="App Store"
                className="h-28 w-auto" 
              />
            </a>

            <a href="#">
              <img
                src="/GooglePlaystore.svg"
                alt="App Store"
                className="h-28 w-auto" 
              />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayMaxModal;
