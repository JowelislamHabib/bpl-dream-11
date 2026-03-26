import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <>
      <div className="container mx-auto">
        Players: {playersData.length}
        <AvailablePlayers playersData={playersData} />
      </div>
    </>
  );
};

export default Players;
