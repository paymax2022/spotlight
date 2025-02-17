"use client";

import React, { useState } from 'react';

const VotePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  
  const voteOptions = [
    { amount: '₦ 5000', points: '100 P' },
    { amount: '₦ 10,000', points: '500 P' },
    { amount: '₦ 15,000', points: '1000 P' },
    { amount: 'Other', points: '₦ = 100P' }
  ];


  return (
    <div className='px-4 py-6 bg-black text-white text-center'>
      <p className='text-[36px] font-bold'>TAKE ACTION!</p>
      <p className='text-[24px] italic text-gray-300'>VOTE TO KEEP YOUR FAVOURITES IN THE COMPETITION</p>

      <div className='flex flex-wrap justify-center gap-4 mt-6'>
        {voteOptions.map((option, index) => (
          <button
            key={index}
            className={`p-4 border rounded-lg w-40 text-center transition ${selectedAmount === index ? 'bg-purple-600' : 'border-gray-500'} hover:bg-purple-500 active:bg-purple-700`}
            onClick={() => setSelectedAmount(index)}
          >
            <p className='text-lg font-semibold'>{option.amount}</p>
            <p className='text-sm text-purple-400'>{option.points}</p>
          </button>
        ))}
      </div>

      <div className='mt-6 px-4 lg:px-10'>
        <button className='px-6  w-full py-3 border-purple-600 border rounded-lg text-white text-lg font-semibold hover:bg-purple-500 active:bg-purple-700 transition'>
          VOTE
        </button>
      </div>

      <div className='mt-6 flex justify-center gap-4 opacity-50'>
        <p className='text-lg font-semibold'>VISA</p>
        <p className='text-lg font-semibold'>MasterCard</p>
      </div>
    </div>
  );
};

export default VotePage;
