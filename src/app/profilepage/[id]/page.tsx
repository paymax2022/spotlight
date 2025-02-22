"use client";
import Link from "next/link";

import { useParams } from "next/navigation";

const ProfilePage = () => {
  const { id } = useParams() as { id: string };

  if (!id) return <div className="text-white">Profile not found.</div>;

  const allProfiles = [
    { id: "123", name: "ANNA PHLY", age: 22, image: "/profileOne.png", vote: 230 },
    { id: "124", name: "ANNAh PHLY", age: 23, image: "/profileTwo.png", vote: 200  },
    { id: "125", name: "ANNA PHLY", age: 24, image: "/profileThree.png", vote: 190 },
    { id: "126", name: "ANNA PHLY", age: 21, image: "/profileFour.png", vote: 180 },
    { id: "127", name: "ANNA PHLY", age: 22, image: "/profileFive.png", vote: 170 },
    { id: "128", name: "ANNA PHLY", age: 25, image: "/profileSix.png", vote: 160 },
    { id: "129", name: "ANNA PHLY", age: 20, image: "/profileSeven.png", vote: 150 },
    { id: "122", name: "ANNA PHLY", age: 19, image: "/profileEight.png", vote: 140 },
  ];

  const selectedProfile = allProfiles.find((profile) => profile.id === id);
  const remainingProfiles = allProfiles.filter((profile) => profile.id !== id);
  

  if (!selectedProfile) {
    return <div className="text-white text-center">Profile not found.</div>;
  }

  return (
    <div className="text-white px-4">
      <div className="space-y-3 text-center mt-5">
        <p className="text-2xl font-bold">CONTESTANT</p>
        <p className="text-lg font-bold">SEASON #1</p>
      </div>
      <div className="flex flex-col items-center text-center py-10">
        <h2 className="text-purple-400 text-xl font-bold">
          #{selectedProfile.id}. {selectedProfile.name}
        </h2>
        <div className="">
        <img
            src="/heart.svg"
            alt="heart"
            width={"auto"}
            height={"auto"}
            className="h-6 w-6 inline-block"
          />
  
       {selectedProfile.vote} votes
    
        </div>
        <p className="text-gray-400">AGE {selectedProfile.age}</p>

        <div className="relative flex items-center justify-center mt-6">
          <div className="absolute w-32 h-32 bg-gray-700 rounded-lg blur-md"></div>
          <img
            src={selectedProfile.image}
            alt={selectedProfile.name}
            width={"auto"}
            height={"auto"}
            className="rounded-lg w-72 h-72object-cover shadow-lg relative z-10"
          />
        </div>

        <Link href="/vote" passHref>
          <button className="mt-4 px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition">
            Vote
          </button>
        </Link>
      </div>

      <div className="px-4">
        <h2 className="text-2xl font-bold">
          LATEST <span className="text-purple-400">TALENT</span>
        </h2>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          {remainingProfiles.map((profile) => (
            <div key={profile.id} className="cursor-pointer text-center">
              <img
                src={profile.image}
                alt={profile.name}
                className="rounded-xl w-full h-48 lg:h-80 object-cover"
              />
              <p className="text-purple-400 mt-2">
                #{profile.id} {profile.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
