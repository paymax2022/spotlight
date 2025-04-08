"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
//import Banner from "../../components/HeaderBanner";
import GeneralBanner from "../../components/HeaderBanner";
import PayMaxModal from "@/components/PaymaxModal";

// Contestant data with votes
const contestants = [
  { id: 123, name: "ANNA PHLY", image: "/profileOne.png", votes: 29107 },
  { id: 124, name: "ANNAH PHLY", image: "/profileTwo.png", votes: 2000 },
  { id: 125, name: "ANNA PHLY", image: "/profileThree.png", votes: 21000 },
  { id: 126, name: "ANNA PHLY", image: "/profileFour.png", votes: 180 },
  { id: 127, name: "ANNA PHLY", image: "/profileFive.png", votes: 15000 },
  { id: 128, name: "ANNA PHLY", image: "/profileSix.png", votes: 12000 },
  { id: 129, name: "ANNA PHLY", image: "/profileSeven.png", votes: 10000 },
  { id: 122, name: "ANNA PHLY", image: "/profileEight.png", votes: 9000 },
];

const ContestantPage = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();

  // Sort by votes (highest first) and assign rank
  const rankedContestants = [...contestants]
    .sort((a, b) => b.votes - a.votes)
    .map((contestant, index) => ({
      ...contestant,
      rank: index + 1, // Assign rank based on sorted position
    }));

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  // Modal state management directly in component
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="px-4 text-white max-w-7xl mx-auto">
      {/* <div className="mt-5">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm lg:text-lg font-medium">Back</span>
        </button>
      </div> */}

      <div className="mt-5">
        <GeneralBanner highlightedText="CONTESTANT" />
      </div>

      {/* <div className="my-8" >
        <button className="text-white bg-purple-600 hover:bg-purple-800 px-4 py-2 rounded-[5px] transition-colors">
          Become a contestant
        </button>
      </div> */}
       <div className="my-8">
      {/* Button to trigger modal */}
      <button 
        onClick={openModal}
        className="text-white bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-[5px] transition-colors font-medium text-lg"
      >
        Become a Contestant
      </button>

      {/* Modal */}
      {isModalOpen && <PayMaxModal onClose={closeModal} />}
    </div>

      <div className="text-center mt-8 mb-6">
        <p className="text-lg lg:text-2xl mt-5 font-semibold">CONTESTANTS</p>
        <p className="text-sm lg:text-lg text-gray-400">SEASON #1</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rankedContestants.slice(0, visibleCount).map((contestant) => (
          <div
            key={contestant.id}
            className="rounded-lg text-center p-4 flex flex-col items-center relative"
          >
            {/* Contestant Image */}
            <div className="w-[250px] h-[300px] mt-8 relative cursor-pointer">
              <div className="absolute top-0 w-full p-2">
                <div className="flex justify-between">
                  <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {contestant.rank} {/* Corrected to show actual ranking */}
                  </div>
                  <div className="text-xs font-medium flex items-center gap-1">
                    <Image
                      src="/heart.svg"
                      alt="heart"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <p className="font-bold">{contestant.votes} votes</p>
                  </div>
                </div>
              </div>
              <Image
                src={contestant.image}
                alt={contestant.name}
                width={250}
                height={300}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Contestant Name & ID */}
            <p className="text-purple-400 text-sm mt-2">#{contestant.id}</p>
            <p className="text-white font-medium">{contestant.name}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < rankedContestants.length && (
        <div className="text-center my-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            VIEW MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default ContestantPage;
