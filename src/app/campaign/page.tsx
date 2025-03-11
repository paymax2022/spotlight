"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";


const Page = () => {
  const categories = [
    {
      title: "FILM CATEGORY SPECIFIC REQUIREMENTS",
      details: [
        "Contestants must submit an original (freestyle) music video (not exceeding 60 seconds). Cover performances are allowed but should have a personal creative interpretation.",
        "TALENT SHOWCASE",
        "Contestants must upload a 1-minute video performing a song, rap, or instrumental to their social media handle with the show’s designated hashtag.",
        "VOTING AND SELECTION PROCESS (Voting Phase)",
        "Contestants’ entries will be uploaded to the show’s official website or social media platform for public voting. Votes will be counted based on the number of votes obtained using the mobile app or website.",
        "TOP 30 SELECTION",
        "The top 30 contestants with the highest votes will be selected for the boot camp stage.",
        "TIE-BREAKER POLICY",
        "In the case of a tie, the panel of judges will evaluate the tied entries based on originality, creativity, and talent to finalize the top 30.",
      ],
    },
    {
      title: "MUSIC CATEGORY SPECIFIC REQUIREMENTS",
      details: [
        "Contestants must submit an original (freestyle) music video (not exceeding 60 seconds). Cover performances are allowed but should have a personal creative interpretation.",
        "TALENT SHOWCASE",
        "Contestants must upload a 1-minute video performing a song, rap, or instrumental to their social media handle with the show’s designated hashtag.",
        "VOTING AND SELECTION PROCESS (Voting Phase)",
        "Contestants’ entries will be uploaded to the show’s official website or social media platform for public voting. Votes will be counted based on the number of votes obtained using the mobile app or website.",
        "TOP 30 SELECTION",
        "The top 30 contestants with the highest votes will be selected for the boot camp stage.",
        "TIE-BREAKER POLICY",
        "In the case of a tie, the panel of judges will evaluate the tied entries based on originality, creativity, and talent to finalize the top 30.",
      ],
    },
  ];

  const initialProfiles = [
    { id: 123, name: "ANNA PHLY", image: "/profileOne.png", votes: 29107 },
    { id: 124, name: "ANNAh PHLY", image: "/profileTwo.png", votes: 2000 },
    { id: 125, name: "ANNA PHLY", image: "/profileThree.png", votes: 21000 },
    { id: 126, name: "ANNA PHLY", image: "/profileFour.png", votes: 18000 },
    { id: 127, name: "ANNA PHLY", image: "/profileFive.png", votes: 15000 },
    { id: 128, name: "ANNA PHLY", image: "/profileSix.png", votes: 12000 },
    { id: 129, name: "ANNA PHLY", image: "/profileSeven.png", votes: 10000 },
    { id: 122, name: "ANNA PHLY", image: "/profileEight.png", votes: 9000 },
  ];

  const moreProfiles = [
    { id: 121, name: "NEW PHLY", image: "/profileThree.png", votes: 1000 },
    { id: 120, name: "NEW PHLY", image: "/profileOne.png", votes: 2000 },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Sort profiles by votes in descending order
    setProfiles((prevProfiles) => [...prevProfiles].sort((a, b) => b.votes - a.votes));
  }, []);

  const loadMoreProfiles = () => {
    if (!loaded) {
      setProfiles((prevProfiles) => [...prevProfiles, ...moreProfiles].sort((a, b) => b.votes - a.votes));
      setLoaded(true);
    }
  };
  return (
    <div className="text-white max-w-7xl mx-auto">



      <div className="relative bg-gradient-to-r from-black to-purple-900 p-6 rounded-3xl">
        <img
          src="/bannerOne.png"
          alt="Breakdancer"
          className="w-full h-100 lg:h-80 object-cover opacity-50 rounded-b-3xl"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          OUR <span className="text-purple-400">APPROACH</span>
        </h1>
      </div>

      <div className="text-center py-10">
        <h2 className="text-lg lg:text-2xl font-semibold">THE PROCESS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 mt-6 text-sm">
          <div className="md:w-1/3 text-center">
            <h3 className="font-bold">IDENTIFY TALENT</h3>
            <p>
              We identify young talent by staging shows across the country.
              Talents can also upload 60-second content in audio or video format
              to qualify.
            </p>
          </div>
          <div className="w-20 border-t-2 border-dotted border-purple-500"></div>

          <div className="md:w-1/3 text-center">
            <h3 className="font-bold">BOOTCAMP</h3>
            <p>
              30-day bootcamp experience with training, mentorship, networking,
              and exposure. Live stage performances for music artists, content
              production for movie actors.
            </p>
          </div>
          <div className="w-20 border-t-2 border-dotted border-purple-500"></div>

          <div className="md:w-1/3 text-center">
            <h3 className="font-bold">CAREER PROGRESSION</h3>
            <p>
              Music record deals, brand ambassadorships, and movie roles with
              long-term engagement with 20+ TV stations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">
          ENTRY <span className="text-purple-400">REQUIREMENT</span>
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-10 px-10 mt-6 text-sm">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`md:w-1/2 text-left ${
                index === 1 ? "lg:border-l border-purple-400 lg:pl-10" : ""
              }`}
            >
              <h3 className="text-purple-400 font-bold text-center mb-3">
                {category.title}
              </h3>
              {category.details.map((detail, idx) =>
                detail === detail.toUpperCase() ? (
                  <h4 key={idx} className="mt-4 font-bold text-white">
                    {detail}
                  </h4>
                ) : (
                  <p key={idx} className="mt-2">
                    {detail}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-lg lg:text-2xl font-semibold">MOVIE/ACTING</h2>
        <div className="bg-[#6200DF] px-12 py-8 text-white text-center mb-5 rounded-lg text-lg uppercase mt-5">
          Designed to identify good actors, skit makers/content creators.
          Identify shortfalls for upcoming producers, actors and actresses.
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-2xl font-bold">
          LATEST <span className="text-purple-400">CONTESTANTS</span>
        </h2>
      </div>
      <div className="" >
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
            {profiles.map((profile, index) => (
              <Link
                key={profile.id}
                href={`/profilepage/${profile.id}`}
                passHref
              >
                <div className="cursor-pointer text-center relative">
                  <div className="absolute top-0 w-full p-2">
                    <div className="flex justify-between">
                    <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {index + 1}
                    </div>
                     <div className="text-xs font-medium flex items-center gap-1">
                        <img
                          src="/heart.svg"
                          alt="heart"
                          width={"auto"}
                          height={"auto"}
                          className="h-6 w-6 inline-block"
                        />
                       <p className="font-bold"> {profile.votes} votes</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={profile.image}
                    alt={profile.name}
                    height={"auto"}
                    width={"auto"}
                    className="rounded-xl w-full sm:h-[300px]  lg:h-[350px]  "
                  />
                  <p className="text-purple-400 mt-2">
                    #{profile.id} {profile.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center py-6">
          {!loaded && (
            <button
              onClick={loadMoreProfiles}
              className="border border-purple-400 text-purple-400 px-6 py-2 rounded-full hover:bg-purple-400 hover:text-white transition"
            >
              View more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
