import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {
  const sliceSize = 4;
  const [showMore, setShowMore] = useState(0);

  return (
    <div className="belt">
      {sushis
      .slice(showMore,showMore + sliceSize)
      .map (sushi => <Sushi sushi={sushi} eatSushi={eatSushi} key={sushi.id} />)}
      <MoreButton handleClick={showMoreSushis}/>
    </div>
  );

  function showMoreSushis() {
    setShowMore(showMore + sliceSize);
  }
}


export default SushiContainer;
