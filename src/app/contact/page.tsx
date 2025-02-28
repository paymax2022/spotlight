"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [amount, setAmount] = React.useState("");
  // if (searchParams) {
  //   console.log(searchParams.get("amount"));
  //   console.log(searchParams.get("point"));
  //   console.log(searchParams.get("user"));
  // } else {
  //   console.log("Params is null");
  // }
  const allProfiles = [
    {
      id: 123,
      name: "ANNA PHLY",
      image: "/profileOne.png",
      votes: 29107,
      age: 25,
      location: "Lagos, Nigeria",
      bio: "I am a singer, songwriter, and performer. I love to entertain and make people happy.",
      dob: "1996-05-12",
    },
    {
      id: 124,
      name: "ANNAh PHLY",
      image: "/profileTwo.png",
      votes: 2000,
      age: 26,
      location: "Kaduna, Nigeria",
      bio: "I am a dancer, choreographer, and performer. I love to entertain and make people happy.",
      dob: "1998-05-12",
    },
    {
      id: 125,
      name: "ANNA PHLY",
      image: "/profileThree.png",
      votes: 21000,
      age: 27,
      location: "Abuja, Nigeria",
      bio: "I am a comedian, actor, and performer. I love to entertain and make people happy.",
      dob: "1997-05-12",
    },
    {
      id: 126,
      name: "ANNA PHLY",
      image: "/profileFour.png",
      votes: 18000,
      age: 28,
      location: "Port Harcourt, Nigeria",
      bio: "I am a model, actor, and performer. I love to entertain and make people happy.",
      dob: "1995-05-12",
    },
    {
      id: 127,
      name: "ANNA PHLY",
      image: "/profileFive.png",
      votes: 15000,
      age: 29,
      location: "Enugu, Nigeria",
      bio: "I am a singer, songwriter, and performer. I love to entertain and make people happy.",
      dob: "1994-05-12",
    },
    {
      id: 128,
      name: "ANNA PHLY",
      image: "/profileSix.png",
      votes: 12000,
      age: 30,
      location: "Ibadan, Nigeria",
      bio: "I am a singer, songwriter, and performer. I love to entertain and make people happy.",
      dob: "1993-05-12",
    },
    {
      id: 129,
      name: "ANNA PHLY",
      image: "/profileSeven.png",
      votes: 10000,
      age: 31,
      location: "Kano, Nigeria",
      bio: "I am a singer, songwriter, and performer. I love to entertain and make people happy.",
      dob: "1992-05-12",
    },
    {
      id: 122,
      name: "ANNA PHLY",
      image: "/profileEight.png",
      votes: 9000,
      age: 32,
      location: "Jos, Nigeria",
      bio: "I am a singer, songwriter, and performer. I love to entertain and make people happy.",
      dob: "1991-05-12",
    },
  ];
  const user = allProfiles.find(
    (profile) => profile.id === Number(searchParams?.get("user"))
  );
  return (
    <div className="px-6">
      <div className="mt-5">
        <button
          onClick={() => router.back()} // Navigate to previous page
          className="mb-4 flex items-center gap-2 text-purple-400 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm lg:text-lg font-medium">Back</span>
        </button>
      </div>

      {user && (
        <div className="mt-10">
          <div className="flex gap-10">
            <div>
              <Image
                src={user.image}
                alt="profile"
                width={100}
                height={100}
                className="rounded-lg h-[150px] w-[150px]"
              />
            </div>
            <div>
              <div className="text-2xl flex gap-4 mt-7">
                <div className="flex gap-2 font-bold text-lg">
                  <p className="lg:text-2xl">{user.id}</p>
                  <p className="lg:text-2xl">{user.name}</p>
                </div>
              </div>

              {/* <div className="mt-5 flex gap-2 justify-center items-center">
              <div>
                <Image
                  src="/heart.svg"
                  alt="profile"
                  width={100}
                  height={100}
                  className="rounded-lg h-[20px] w-[20px]"
                />
              </div>
              <div>
                <p>10000</p>
              </div>
            </div> */}
            </div>
          </div>

          <div className="flex justify-between items-center flex-nowrap mt-8">
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
              YOU ARE MAKING A{" "}
              <span className="text-[#6200DF]">
                {searchParams ? searchParams.get("amount") : "N/A"}
              </span>{" "}
              VOTING FOR{" "}
              {searchParams?.get("amount") === "Other" ? (
                <span className="text-[#6200DF]">
                  {amount === "" ? 0 : Number(amount) * 50}
                </span>
              ) : (
                <span className="text-[#6200DF]">
                  {searchParams ? searchParams.get("point") : "N/A"}
                </span>
              )}
              {" "}
              POINTS
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg font-semibold">CONTACT DETAILS</p>
            <p className="text-sm text-gray-400">
              Please fill in the form below. Mandatory fields are marked with a
              *
            </p>

            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="FULL NAME"
                className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
              />

              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
              />
              {/* <input
              type="text"
              placeholder="ADDRESS"
              className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
            /> */}
              <input
                type="tel"
                placeholder="TELEPHONE"
                className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
              />
              {searchParams?.get("amount") === "Other" && (
                <input
                  type="text"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 bg-black border border-purple-500 text-gray-300 rounded-md focus:outline-none"
                />
              )}
            </div>

            <div className="my-5">
              <p>
                We will never sell or swap your data and we promise to keep it
                safe and secure in accordance with our privacy policy. If you
                would prefer us not to contact you or you change your mind at
                any time please call us on 020 8780 7500 or email 
                enquiry@timeless-entertainment.com.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start my-10">
            <Link
              href={`/payment?amount=${searchParams?.get(
                "amount"
              )}&point=${searchParams?.get("point")}`}
              passHref
            >
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto shadow-md hover:bg-gray-200">
                DEBIT CARD
              </button>
            </Link>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full w-full sm:w-auto shadow-md hover:bg-gray-200">
              BANK TRANSFER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
