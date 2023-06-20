import React from "react";

const Card = () => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's OUT</p>
        <p className="px-2">through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="FoodCard"
      />
    </div>
  );
};

export default Card;
