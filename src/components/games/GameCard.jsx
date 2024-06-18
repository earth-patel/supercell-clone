import React from "react";
import boombeach from "../../assets/images/boombeach_thumbnail.png";

const GameCard = ({ game }) => {
  return (
    <div className="mt-28 sm:w-80 h-72 font-sans font-extrabold">
      <div className="sm:w-80 h-52 ">
        <img
          src={game.image}
          alt="boombeach"
          className="w-full h-full rounded-md"
        />
      </div>
      <p className="mt-2">{game.name}</p>
    </div>
  );
};

export default GameCard;
