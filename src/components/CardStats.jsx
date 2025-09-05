import React from "react";
import { Award } from "lucide-react";
function CardStats() {
  return (
    <>
      <div className="bg-white px-3 py-2.5 rounded self-center">
        <strong className="">Badge collection</strong>
        <div className="flex justify-between items-center">
          <span className="grid gap-1.5">
            <Award className="justify-self-center size-10 bg-amber-500 text-white px-3 py-1 rounded-full" />
            <p>Bronze</p>
          </span>
          <span>
            <Award className="justify-self-center size-10 bg-orange-500 text-white px-3 py-1 rounded-full" />
            <p>Gold</p>
          </span>
          <span>
            <Award className="justify-self-center size-10 bg-gray-300 text-white px-3 py-1 rounded-full" />
            <p>silver</p>
          </span>
        </div>
      </div>
      <div className="bg-white px-3 py-2.5 rounded self-center">
        <strong>key metrics</strong>
        <section className="flex gap-2 justify-between text-azure-34">
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section className="flex justify-between text-azure-34">
          <h4>Challenges completed</h4>
          <p>3</p>
        </section>
        <section className="flex justify-between text-azure-34">
          <h4>Hackathons</h4>
          <p>2</p>
        </section>
        <section className="flex justify-between text-azure-34">
          <h4>Project showcased</h4>
          <p>3</p>
        </section>
      </div>
      <div className="bg-white px-3 py-2.5 rounded self-center">
        <strong>Next milestone</strong>
        <div className="grid place-items-center">
          <Award className="size-10 bg-orange-500 text-white px-3 py-1 rounded-full" />
          <h3 className="font-bold text-xl">Gold achiever</h3>
          <p className="justisfy-self-center text-azure-34 text-md">
            conglatulations
          </p>
        </div>
        <div className="border-4 rounded-full border-green-400"></div>
      </div>
    </>
  );
}

export default CardStats;
