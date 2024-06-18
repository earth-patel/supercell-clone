import React from "react";
import { troops } from "../../data";
import Card from "./Card";
const Troops = () => {
  return (
    <div className="pt-24 gap-5 mt-20 overflow-x-auto hide-scrollbar flex">
      {troops.map((data, i) => (
        <Card troops={data} key={i} />
      ))}
    </div>
  );
};

export default Troops;
