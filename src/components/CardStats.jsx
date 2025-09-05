import React from "react";
import { Award } from "lucide-react";
function CardStats() {
  return (
    <>
      <div className="card-one">
        <Award />
        <Award />
        <Award />
      </div>
      <div className="card-two">
        <strong>key metrics</strong>
        <section>
          <h4>total points</h4>
          <p>343</p>
        </section>
        <section>
          <h4>challenge completed</h4>
          <p>34</p>
        </section>
        <section>
          <h4>hackathon won</h4>
          <p>43</p>
        </section>
        <section>
          <h4>showcased project</h4>
          <p>10</p>
        </section>
      </div>
      <div className="card-three">
        <strong>Next milestone</strong>
        <div>
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
