import React, { use } from "react";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <>
      <div>
        <h1>Player</h1>
      </div>
    </>
  );
};

export default Players;
