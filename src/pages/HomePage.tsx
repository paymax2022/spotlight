"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomePage = () => {
  const judges = [
    { name: "2FACE IDIBAI", image: "/judgeOne.png" },
    { name: "SIMI", image: "/judgeTwo.png" },
    { name: "EBUKA", image: "/judgeThree.png" },
    { name: "TY BELLO", image: "/judgeFour.png" },
    { name: "TY MIX", image: "/judgeFive.png" },
    { name: "TIWA SAVAGE", image: "/judgeSix.png" },
  ];

  const newsItems = [
    {
      img: "/newsOne.png",
      title: "Timeless Entertainment Factory is Staging Talent Hunt",
    },
    {
      img: "/newsTwo.png",
      title: "Timeless Entertainment Factory is Staging Talent Hunt",
    },
    {
      img: "/newsThree.png",
      title: "Timeless Entertainment Factory is Staging Talent Hunt",
    },
    {
      img: "/newsFour.png",
      title: "Timeless Entertainment Factory is Staging Talent Hunt",
    },
  ];

  const storyItems = [
    "/storyOne.png",
    "/storyTwo.png",
    "/storyOne.png",
    "/storyOne.png",
    "/storyTwo.png",
    "/storyOne.png",
  ];
  const musicItems = [
    { image: "/musicOne.png", name: "Contestant 1" },
    { image: "/musicTwo.png", name: "Contestant 2" },
    { image: "/musicThree.png", name: "Contestant 3" },
    { image: "/musicFour.png", name: "Contestant 4" },
    { image: "/musicFive.png", name: "Contestant 5" },
    { image: "/musicSix.png", name: "Contestant 6" },
  ];

  const sponsors = [
    "/sponsorOne.png",
    "/sponsorTwo.png",
    "/sponsorThree.png",
    "/sponsorFour.png",
    "/sponsorFive.png",
  ];

  const [visibleNews, setVisibleNews] = useState(2);

  return (
    <div className="text-white p-6">
      <div className=" ">
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-white">
          LIGHTS, BEATS, ACTION!
        </h1>
        <p className="text-gray-300 lg:text-3xl text-center mt-1">
          Your journey in music & film starts here.
        </p>
        <div className="flex justify-center">
          <button className="mt-4 px-10 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500 ">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Image
          src="/hero.svg"
          alt="Hero"
          width={800}
          height={400}
          className=""
        />
      </div>
      <div className="px-8 mt-16">
        <div className="flex justify-center items-center gap-6">
          {sponsors.map((logo, index) => (
            <div key={index} className="relative h-10 w-10 lg:w-20 lg:h-20">
              <Image
                src={logo}
                alt={`Sponsor ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-full border border-purple-600 p-1"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-black py-8 px-10 rounded-xl mt-10">
        <p className="font-bold text-lg">ABOUT US</p>
        <p className="mt-3 text-lg uppercase">
          {" "}
          <strong>Timeless Entertainment Factory</strong> is a team of problem
          solvers. Not just for brands, but for each other. We thrive on each
          member of our little crew being completely themselves, both in their
          work style and their office banter - and that’s what makes us work!
        </p>
      </div>
      <div className="mt-8 w-full max-w-7xl mx-auto">
        <h2 className="text-lg font-bold mb-4 text-center">
          LATEST <span className="text-purple-500">CONTESTANT</span>
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {musicItems.map((item, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="group relative w-[100px] h-[100px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                  <span className="text-white text-sm font-bold">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-purple-400 italic text-[22px] text-center">
        <p>
          WE IDENTIFY WITH TALENTS ACROSS SELECTED STATES WE PROVIDE THEM A
          PLATFORM TO EXCEL.
        </p>
        <p>IN COLLABORATION WITH PICTUREPERFECT AND OTHER LEADING BRANDS.</p>
      </div>
      <div className="bg-[#6200DF] p-4 mt-8 w-full max-w-7xl mx-auto rounded-lg">
        <h2 className="text-lg font-bold mb-4">STORIES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-7 mb-3">
          {storyItems.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Story"
              width={100}
              height={100}
              className="rounded-lg w-full object-fit"
            />
          ))}
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">JUDGES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9">
          {judges.map((judge, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={judge.image}
                alt={judge.name}
                width={300}
                height={385}
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-center font-semibold">{judge.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">NEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsItems.slice(0, visibleNews).map((news, index) => (
            <div key={index}>
              {/* Set a fixed height on the parent */}
              <div className="relative w-full h-40 md:h-56">
                <Image
                  src={news.img}
                  alt={`News ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm">{news.title}</p>
              <a href="#" className="text-blue-400 text-xs">
                READ MORE
              </a>
            </div>
          ))}
        </div>
        {visibleNews < newsItems.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleNews(newsItems.length)}
              className="border border-purple-400 px-6 py-2 rounded-full text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              Read more
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
