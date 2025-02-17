"use client";
import React, { useState } from 'react';
import Image from 'next/image';


const contestants = [
  { id: 123, name: 'ANNA PHILY', image: '/profileOne.png' },
  { id: 124, name: 'ANNA PHILY', image: '/profileTwo.png' },
  { id: 125, name: 'ANNA PHILY', image: '/profileThree.png' },
  { id: 126, name: 'ANNA PHILY', image: '/profileFour.png' },
  { id: 127, name: 'ANNA PHILY', image: '/profileFive.png' },
  { id: 128, name: 'ANNA PHILY', image: '/profileSix.png' },
  { id: 129, name: 'ANNA PHILY', image: '/profileSeven.png' },
];

const ContestantPage = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className='px-4 text-white'>
      <div className='text-center mb-6'>
        <p className='text-lg font-semibold'>CONTESTANT</p>
        <p className='text-sm text-gray-400'>SEASON #1</p>
      </div>

      <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {contestants.slice(0, visibleCount).map((contestant) => (
          <div key={contestant.id} className='rounded-lg text-center'>
            <Image
              src={contestant.image}
              alt={contestant.name}
              width={200}
              height={160}
              className='w-full h-40 object-fill rounded-md mb-2'
            />
             <p className='text-purple-400 text-sm'>#{contestant.id}</p>
             <p className='text-white font-medium'>{contestant.name}</p>
          </div>
          
        ))}
      </div>

      {visibleCount < contestants.length && (
        <div className='text-center mt-6'>
          <button
            onClick={loadMore}
            className='px-6 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition'
          >
            VIEW MORE
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default ContestantPage;
