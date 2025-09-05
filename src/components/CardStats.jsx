import React from "react";
import { Award } from "lucide-react";
function CardStats() {
  return (
    <>
      <div className="flex gap-2 mx-3">
        <Award />
        <Award />
        <Award />
      </div>
      <div className="">
        <strong>key metrics</strong>
        <section className="columns columns-2 gap-3">
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section className="columns columns-2 gap-3">
          <h4>challenge completed</h4>
          <p>34</p>
        </section>
        <section className="columns columns-2 gap-3">
          <h4>hackathon won</h4>
          <p>43</p>
        </section>
        <section className="columns columns-2 gap-3">
          <h4>showcased project</h4>
          <p>10</p>
        </section>
      </div>
      <div className="grid">
        <strong>Next milestone</strong>
        <div className="justify-self-center">
          <Award />
          <h3>Gold achiever</h3>
          <p>conglatulations</p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default CardStats;
