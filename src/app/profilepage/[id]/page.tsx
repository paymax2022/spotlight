"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const voteOptions = [
  { amount: "5000", points: "100" },
  { amount: "10,000", points: "500 " },
  { amount: "15,000", points: "1000" },
  { amount: "Other", points: " 100" },
];
// { amount: '₦ 5000', points: '100 P' },

const ProfilePage = () => {
  const { id } = useParams() as { id: string };
  const paramId = Number(id);
  const [userId, setUserId] = useState<number>(paramId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<{
    amount: string;
    points: string;
  } | null>(null);
  const router = useRouter();

  const handleVote = () => {
    router.push(
      `/contact?amount=${selectedAmount?.amount}&point=${selectedAmount?.points}&user=${userId}`
    );
  };

  useEffect(() => {
    setUserId(paramId);
  }, [id]);

  if (!id) return <div className="text-white">Profile not found.</div>;

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

  const selectedProfile = allProfiles.find(
    (profile) => profile.id === Number(userId)
  );
  const remainingProfiles = allProfiles.filter(
    (profile) => profile.id !== Number(userId)
  );

  if (!selectedProfile) {
    return <div className="text-white text-center">Profile not found.</div>;
  }

  return (
    <>
      <div className="text-white px-4 max-w-7xl mx-auto">
        <div className="space-y-3 text-center mt-5">
          <p className="text-2xl font-bold">CONTESTANT</p>
          <p className="text-lg font-bold">SEASON #1</p>
        </div>
        <div className="flex flex-col items-center text-center py-10">
          <h2 className="text-purple-400 text-xl font-bold">
            #{selectedProfile.id}. {selectedProfile.name}
          </h2>
          <div>
            <img
              src="/heart.svg"
              alt="heart"
              className="h-6 w-6 mx-3 inline-block"
            />
            {selectedProfile.votes} votes
          </div>
       

          <div className="relative flex items-center justify-center mt-6">
            <div className="absolute w-32 h-32 bg-gray-700 rounded-lg blur-md"></div>
            <img
              src={selectedProfile.image}
              alt={selectedProfile.name}
              className="rounded-lg w-72 h-72 object-cover shadow-lg relative z-10"
            />
          </div>
           <div className="mt-4" >
           <p className="text-purple-400 font-bold" >AGE: <span className="text-white" >{selectedProfile.age}</span></p>
            <p className="text-purple-400 font-bold" >LOCATION: <span className="text-white" >{selectedProfile.location}</span></p>
            <p className="text-purple-400 font-bold" >DATE OF BIRTH: <span className="text-white" >{selectedProfile.dob}</span></p>
            <p className="text-purple-400 font-bold" >BIO: <span className="text-white" >{selectedProfile.bio}</span></p>
           </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition"
          >
            Vote
          </button>
        </div>

        <div className="px-4">
          <h2 className="text-2xl font-bold">
            LATEST <span className="text-purple-400">TALENT</span>
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
            {remainingProfiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setUserId(profile.id)}
                className="cursor-pointer text-center"
              >
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center">
          <div className="p-6 rounded-lg shadow-lg text-black text-center">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 w-10 h-10  bg-purple-700 text-white  text-center rounded-full hover:bg-purple-600"
              >
                X
              </button>
            </div>

            <div className="px-4 py-6 bg-black text-white text-center">
              <p className="text-[36px] font-bold">TAKE ACTION!</p>
              <p className="text-[24px] italic text-gray-300">
                VOTE TO KEEP YOUR FAVOURITES IN THE COMPETITION
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {voteOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`p-4 border rounded-lg w-40 text-center transition ${
                      selectedAmount === option
                        ? "bg-purple-600"
                        : "border-gray-500"
                    } hover:bg-purple-500 active:bg-purple-700`}
                    onClick={() => setSelectedAmount(option)}
                  >
                    <p className="text-lg font-semibold">{option.amount}</p>
                    <p className="text-sm text-purple-400">{option.points}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 px-4 lg:px-10">
                {/* <Link href="/contact" passHref> */}
                <button
                  onClick={handleVote}
                  className="px-6  w-full py-3 border-purple-600 border rounded-lg text-white text-lg font-semibold hover:bg-purple-500 active:bg-purple-700 transition"
                >
                  VOTE
                </button>
                {/* </Link> */}
              </div>

              <div className="mt-6 flex justify-center gap-4 opacity-50">
                <p className="text-lg font-semibold">VISA</p>
                <p className="text-lg font-semibold">MasterCard</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
