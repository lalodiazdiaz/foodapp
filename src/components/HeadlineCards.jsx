import React from "react";
import Card from "./Card";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* Card */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default HeadlineCards;
