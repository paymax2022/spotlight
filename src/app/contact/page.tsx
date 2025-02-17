"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="px-6">
      <div>
        <button onClick={() => router.back()}>&larr; Back</button>
      </div>

      <div className="mt-10">
      
        <div className="flex justify-between items-center flex-nowrap">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 px-2 py-2 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
              1
            </div>
            <p className="text-sm whitespace-nowrap">VOTING DETAILS</p>
          </div>

          {/* Line */}
          <div className="w-24 h-1 bg-gray-500 mx-auto my-2 rounded-md"></div>

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 px-2 py-2 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
              2
            </div>
            <p className="text-sm whitespace-nowrap">PAYMENT DETAILS</p>
          </div>
        </div>

  
        <div>
          <p className="text-[36px] font-bold">VOTING</p>
          <p className="text-[24px] italic text-gray-300">
            YOU ARE MAKING A <span className="text-[#6200DF]">5000</span> VOTING
            FOR 100 <span className="text-[#6200DF]">POINTS</span>
          </p>
        </div>

   
        <div className="mt-6">
          <p className="text-lg font-semibold">CONTACT DETAILS</p>
          <p className="text-sm text-gray-400">
            Please fill in the form below. Mandatory fields are marked with a *
          </p>

       
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="LAST NAME"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="ADDRESS"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="TELEPHONE"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="my-5">
            <p>
              We will never sell or swap your data and we promise to keep it
              safe and secure in accordance with our privacy policy. If you
              would prefer us not to contact you or you change your mind at any
              time please call us on 020 8780 7500 or email 
              enquiry@timeless-entertainment.com.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start my-10">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto shadow-md hover:bg-gray-200">
            CREDIT/DEBIT CARD
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto shadow-md hover:bg-gray-200">
            BANK TRANSFER
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;
