"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";


const Page = () => {
  const searchParams = useSearchParams();
  
  if (searchParams) {
    console.log(searchParams.get("amount"));
    console.log(searchParams.get("point"));
  } else {
    console.log("Params is null");
  }
  return (
    <div className="px-4">
     
      <div>
        <p className="text-[36px] font-bold">VOTING</p>
        <p className="text-[24px] italic text-gray-300">
          YOU ARE MAKING A <span className="text-[#6200DF]">{searchParams ? searchParams.get("amount") : "N/A"}</span> VOTING
          FOR  <span className="text-[#6200DF]">{searchParams ? searchParams.get("point") : "N/A"}</span> POINTS
        </p>
      </div>

      <div className="mt-6">
        <p className="text-lg font-semibold">PAYMENT DETAILS</p>
        <p className="text-sm text-gray-400">
          Please fill in the form below. Mandatory fields are marked with a *
        </p>
      </div>
      <div className="space-y-2 mt-10">
        <input
          type="text"
          placeholder="CARD NUMBER"
          className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="CARD HOLDER NAME"
          className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="EXPIRY DATE"
          className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
        />
      </div>
      <div className="my-8">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto shadow-md hover:bg-gray-200">
          PAY
        </button>
      </div>
    </div>
  );
};

export default Page;
