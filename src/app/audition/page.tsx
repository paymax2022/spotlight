import React from "react";
import GeneralBanner from "@/components/HeaderBanner";

const location = [
  { name: "Lagos", title: "SUN 13, 2025" },
  { name: "Porthacourt", title: "MON 13, 2025" },
  { name: "Calabar", title: "TUE 13, 2025" },
  { name: "Delta", title: "WED 14, 2025" },
];

const faqData = [
  {
    question: "What should I do if I can no longer attend?",
    answer: "Please email us at Tef@TEF.com to inform us."
  },
  {
    question: "What should I do if the city I want to audition in is fully booked?",
    answer: "We will release slots from cancellations as soon as possible. Please consider auditioning in other locations if you cannot secure a slot."
  },
  {
    question: "When do registrations close?",
    answer: "Registration closes 3 days prior to the respective audition date."
  },
  {
    question: "Will you be adding more cities for auditions?",
    answer: "Unfortunately, not at this time."
  },
  {
    question: "I have a question that isn’t covered here: who can I ask?",
    answer: "Please email us at Tef@TEF.com with your query."
  }
];


const page = () => {
  const groupedLocation = [];
  for (let i = 0; i < location.length; i += 2) {
    groupedLocation.push(location.slice(i, i + 2));
  }
  return (
    <div className="text-white max-w-7xl mx-auto px-4">
      <div className="mt-5">
        <GeneralBanner highlightedText="AUDITION" />
      </div>
{/* 
      <div className="text-center font-bold lg:text-2xl my-5">AUDITIONS</div> */}
      <div className="text-center italic text-lg lg:text-2xl text-[#6200DF] my-8 ">
        TIMELESS ENTERTAINMENT FACTORY holds auditions throughout the year for
        its productions in the LAGOS. On this page, you’ll find everything you
        need to know about upcoming audition schedules, how to register, and
        what to expect during the audition process.
      </div>

      <div className="my-10">
        <div className="font-bold uppercase">
          ONE BEAT ONE VERSE - OPEN AUDITIONS
        </div>

        <div  className="space-y-5" >

        <div>
          Timeless Entertainment Factory is conducting a nationwide search for
          exceptional singers/actors, and strong contemporary dancers for the
          new TEF production of <span>The NEXT RATED STAR</span>
        </div>

        <div>
          Singing and dance auditions will be held in each city on the same day.
          A registration system has been set up for all auditions. Details about
          how to book a place are outlined below. If you do not have a
          pre-booked slot, you will not be able to audition on the day. Please
          bring a CV and headshot with you that includes your contact details.
          You must be 18 or older.
        </div>

        <div>
          Singing Auditions: Please prepare a cut version 36 bars of 2 pop or
          contemporary musical theatre songs. Please bring sheet music. A
          pianist will be provided. No backing tracks.
        </div>

        <div>
          Dance Auditions Please wear dance clothing, trainers, or jazz shoes.
          Acrobatic skills are a significant plus but not essential. You may be
          asked to sing during your audition, so please prepare a short pop song
          with the sheet music.
        </div>

        <div>
          How to Audition To register interest in the open call, please click
          the link below for the relevant city.Places are allocated on a
          first-come, first-served basis; you will receive a follow-up email
          with a confirmation, including the venue (city centre location) and
          times.Please be prepared to wait. You must have a confirmation to be
          seen.
        </div>
        </div>
      </div>

      <div className="text-white my-10">
        <h2 className="text-lg font-bold uppercase mb-4">Audition Locations</h2>

        <div className="space-y-5">
          {groupedLocation.map((pair, index) => (
            <div
              key={index}
              className="lg:flex lg:justify-between space-y-5 lg:gap-10"
            >
              {pair.map((location, i) => (
                <div
                  key={i}
                  className="pb-4 lg:w-1/2 border-b border-gray-500 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">{location.name}</p>
                    <p className="text-gray-400 text-sm">{location.title}</p>
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

      
      <div>
      <div className=" font-bold text-lg my-5">FAQS</div>
      <div>
      {faqData.map((item, index) => (
        <div className="my-5" key={index}>
          <div className="font-bold">{item.question}</div>
          <div>{item.answer}</div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default page;
