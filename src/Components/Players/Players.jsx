import React, { use } from "react";

const Players = ({ playersPromise }) => {
  console.log(playersPromise);
  const playersData = use(playersPromise);
  console.log(playersData);
  return <div></div>;
};

export default Players;
