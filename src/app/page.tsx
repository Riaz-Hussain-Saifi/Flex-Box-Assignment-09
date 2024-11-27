import React from 'react'

const FlexBox = () => {
  return (
    <div className="flex flex-col items-center mx-8 my-6 gap-8">
      {/* First row: 2 cards */}
      <div className="flex gap-16">
        <div className="flex items-center justify-center w-40 h-40 bg-green-400 rounded-lg">
          <div className="text-white text-2xl">Card 1</div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 bg-red-400 rounded-lg">
          <div className="text-white text-2xl">Card 2</div>
        </div>
      </div>

      {/* Second row: 3 cards */}
      <div className="flex gap-16">
        <div className="flex items-center justify-center w-40 h-40 bg-blue-400 rounded-lg">
          <div className="text-white text-2xl">Card 3</div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 bg-cyan-400 rounded-lg">
          <div className="text-white text-2xl">Card 4</div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 bg-yellow-400 rounded-lg">
          <div className="text-white text-2xl">Card 5</div>
        </div>
      </div>
    </div>
  );
};

export default FlexBox
