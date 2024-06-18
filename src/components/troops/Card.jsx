import React from "react";
import "./card.css"

const Card = ({troops}) => {
  console.log(troops)
  return (
    <div
      style={{ background: troops.background }}
      className="font-sans rounded-3xl flex flex-col items-center w-auto sm:w-80 p-2 font-semibold"
    >
      <div className="sm:-mt-28 image w-96">
        <img src={troops.image} alt="" />
      </div>
      <div className="mt-16 flex flex-col p-3">
        <div className="flex items-center justify-between">
          <div>
            <h2>{troops.name}</h2>
            <p className="text-sm">{troops.author}</p>
          </div>
          <div>
            <button className="text-white border-2 text-xs py-3 px-5 rounded-3xl bg-transparent">
              Use Portion
            </button>
          </div>
        </div>
        <div className="h-12 mt-2">
        <p className="text h-12 overflow-hidden">
        {troops.description}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
