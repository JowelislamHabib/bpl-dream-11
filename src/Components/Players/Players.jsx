import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between mt-10">
          {" "}
          {selectedType === "available" ? (
            <h1 className="font-bold text-2xl">Available Players</h1>
          ) : (
            <h1 className="font-bold text-2xl">Selected Players</h1>
          )}
          <div>
            {" "}
            <button
              onClick={() => setSelectedType("available")}
              className={`btn ${selectedType === "available" ? "btn-primary" : ""} border-r-0 rounded-r-none`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedType("selected")}
              className={`btn ${selectedType === "selected" ? "btn-primary" : ""} border-l-0 rounded-l-none`}
            >
              Selected (0)
            </button>
          </div>
        </div>
        {selectedType === "available" ? (
          <AvailablePlayers playersData={playersData} />
        ) : (
          <SelectedPlayers />
        )}
      </div>
    </>
  );
};

export default Players;
