import React from "react";
import Banner from "../../components/HeaderBanner";
import CarouselPage from "../../components/CarouselPage";
const profiles = [
  { name: "Patrick", title: "CEO" },
  { name: "Patrick", title: "President" },
  { name: "Patrick", title: "CEO" },
  { name: "Patrick", title: "President" },
  { name: "Jane", title: "CTO" },
  { name: "John", title: "CFO" },
];

const directors = [
  { name: "Victor", title: "CEO" },
  { name: "Parloff", title: "President" },
  { name: "Patrick", title: "CEO" },
  { name: "Patrick", title: "President" },
  { name: "Patrick", title: "CEO" },
  { name: "Patrick", title: "President" },
];

const page = () => {
  const groupedProfiles = [];
  for (let i = 0; i < profiles.length; i += 2) {
    groupedProfiles.push(profiles.slice(i, i + 2));
  }
  const directorList = [];
  for (let i = 0; i < directors.length; i += 3) {
    directorList.push(directors.slice(i, i + 3));
  }

  return (
    <div className="text-white max-w-7xl mx-auto px-4">
      <div className="mt-2" >
      <Banner />
      </div>

      <div className="flex my-10 flex-col lg:flex-row  lg:gap-10 lg:justify-between">
        <div className="w-full lg:w-1/2 text-[#6200DF] uppercase italic text-[24px]">
          We identify with Talents across selected
        </div>
        <div className="w-full lg:w-1/2 text-[16px] mt-12 lg:mt-0 ">
          30days bootcamp experience to provide rigorous training, nurturing,
          mentorship, exposure, networking with industry experts. Music artists
          shall have Live stage performances in clubs, shows while Movie actors
          shall produce several contents for 15 TV stations.
        </div>
      </div>

      <div className="mt-14 mb-10">
      <h2 className="text-lg font-bold uppercase mb-4">Timeline</h2>
      <p className="text-md uppercase" >From TEF’s origin to a decade of building global talents</p>
      </div>

      <div className="text-white my-10">
        <h2 className="text-lg font-bold uppercase mb-4">Leadership</h2>

        <div className="space-y-5">
          {groupedProfiles.map((pair, index) => (
            <div
              key={index}
              className="lg:flex lg:justify-between space-y-5 lg:gap-10"
            >
              {pair.map((profile, i) => (
                <div
                  key={i}
                  className="pb-4 lg:w-1/2 border-b border-gray-500 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="text-gray-400 text-sm">{profile.title}</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              ))}
              {pair.length < 2 && (
                <div className="lg:w-1/2" /> // Fill in the gap to keep layout aligned
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-white  mt-14 mb-10">
        <h2 className="text-lg font-bold uppercase mb-4">Board of Directors</h2>

        <div className="space-y-5">
          {directorList.map((pair, index) => (
            <div
              key={index}
              className="lg:flex lg:justify-between space-y-5 lg:gap-10"
            >
              {pair.map((profile, i) => (
                <div
                  key={i}
                  className="pb-4 lg:w-1/2 border-b border-gray-500 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="text-gray-400 text-sm">{profile.title}</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              ))}
              {pair.length < 2 && <div className="lg:w-1/2" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 mb-10">
      <h2 className="text-lg font-bold uppercase mb-4">Our Offices</h2>
        <CarouselPage />
      </div>
    </div>
  );
};

export default page;
