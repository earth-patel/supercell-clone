import React from "react";
import { game } from "../../data";
import GameCard from "./GameCard";

const Games = () => {
  return (
    <div className="flex p-10 gap-5 overflow-x-scroll hide-scrollbar">
      {game.map((data, i) => (
        <GameCard key={i} game={data} />
      ))}
    </div>
  );
};

export default Games;
