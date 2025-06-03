
import Image from "next/image";

interface GeneralBannerProps {
  highlightedText?: string;
}

const GeneralBanner = ({ highlightedText = "APPROACH" }: GeneralBannerProps) => {
  return (
    <div className="relative">
      <img
        src="/bannerOne.png"
        alt="Breakdancer"
        className="w-full h-[200px] lg:h-[350px] rounded-3xl  "
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
       <span className="text-white">{highlightedText}</span>
      </h1>
    </div>
  );
};

export default GeneralBanner;
