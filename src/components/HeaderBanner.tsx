import Image from "next/image";

const AboutUsBanner = () => {
  return (
    
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
  );
};

export default AboutUsBanner;
