import "./card.css";
import React from "react";

type Props = {
  label?: string;
  class?: string;
  arrow: boolean;
};
const Card = (props: Props) => {
  return (
    <div
      className={`${props.class} ${
        props.arrow ? "arrow__card" : ""
      } bg-white shadow-lg p-5 relative text-sm`}
    >
      <div className="text-right text-6xl font-bold text-gray-100 ">{props.label}</div>
      <div className="p-5">
        Sunt ratione iure porro quis cupiditate ipsa quod perferendis est culpa
        commodi adipisci hic
      </div>
    </div>
  );
};

export default Card;
