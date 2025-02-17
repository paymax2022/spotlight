"use client";

import { useParams } from "next/navigation";

const ProfilePage = () => {
    const { id } = useParams() as { id: string };

    if (!id) return <div className="text-white">Profile not found.</div>;

    const allProfiles = [
        { id: "123", name: "ANNA PHLY", age: 22, image: "/profileOne.png" },
        { id: "124", name: "ANNAh PHLY", age: 23, image: "/profileTwo.png" },
        { id: "125", name: "ANNA PHLY", age: 24, image: "/profileThree.png" },
        { id: "126", name: "ANNA PHLY", age: 21, image: "/profileFour.png" },
        { id: "127", name: "ANNA PHLY", age: 22, image: "/profileFive.png" },
        { id: "128", name: "ANNA PHLY", age: 25, image: "/profileSix.png" },
        { id: "129", name: "ANNA PHLY", age: 20, image: "/profileSeven.png" },
        { id: "122", name: "ANNA PHLY", age: 19, image: "/profileEight.png" },
    ];

    const selectedProfile = allProfiles.find((profile) => profile.id === id);
    const remainingProfiles = allProfiles.filter((profile) => profile.id !== id);

    if (!selectedProfile) {
        return <div className="text-white text-center">Profile not found.</div>;
    }

    return (
        <div className="text-white px-4">
            <div className="flex flex-col items-center text-center py-10">
                <h2 className="text-purple-400 text-xl font-bold">
                    #{selectedProfile.id}. {selectedProfile.name}
                </h2>
                <p className="text-gray-400">AGE {selectedProfile.age}</p>

                <div className="relative flex items-center justify-center mt-6">
                    <div className="absolute w-32 h-32 bg-gray-700 rounded-lg blur-md"></div>
                    <img src={selectedProfile.image} alt={selectedProfile.name} className="rounded-lg w-48 h-48 object-cover shadow-lg relative z-10" />
                </div>

                <button className="mt-4 px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition">
                    Vote
                </button>
            </div>

            <div className="px-4">
                <h2 className="text-2xl font-bold">LATEST <span className="text-purple-400">TALENT</span></h2>
            </div>

            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                    {remainingProfiles.map((profile) => (
                        <div key={profile.id} className="cursor-pointer text-center">
                            <img src={profile.image} alt={profile.name} className="rounded-xl w-full h-48 lg:h-80 object-cover" />
                            <p className="text-purple-400 mt-2">#{profile.id} {profile.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
