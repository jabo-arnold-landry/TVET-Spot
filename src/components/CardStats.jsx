import React from "react";
import { Award } from "lucide-react";
function CardStats() {
  return (
    <>
      <div className="bg-white px-3 py-5 rounded">
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
      <div className="bg-white px-3 py-5 rounded">
        <strong>key metrics</strong>
        <section className="flex gap-2 justify-between">
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section className="flex justify-between">
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section className="flex justify-between">
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section className="flex justify-between">
          <h4>total points</h4>
          <p>343</p>
        </section>
      </div>
      <div className="bg-white px-3 py-5 rounded relative">
        <strong>Next milestone</strong>
        <div className="grid place-items-center">
          <Award className="size-10 bg-orange-500 text-white px-3 py-1 rounded-full" />
          <h3 className="font-bold text-xl">Gold achiever</h3>
          <p className="justisfy-self-center text-azure-34 text-md">
            conglatulations
          </p>
        </div>
        <div className="bg-red-400 absolute"></div>
      </div>
    </>
  );
}

export default CardStats;
