import React from "react";
import { User } from "lucide-react";
import { AF, AU, PK, GB, NZ, BD, ZA, ZW } from "country-flag-icons/react/3x2";

const AvailablePlayers = ({ playersData }) => {
  const flags = {
    Afghanistan: (
      <AF className="w-6 h-4 shadow-sm rounded-xs" title="Afghanistan" />
    ),
    Australia: (
      <AU className="w-6 h-4 shadow-sm rounded-xs" title="Australia" />
    ),
    Pakistan: <PK className="w-6 h-4 shadow-sm rounded-xs" title="Pakistan" />,
    England: <GB className="w-6 h-4 shadow-sm rounded-xs" title="England" />,
    "New Zealand": (
      <NZ className="w-6 h-4 shadow-sm rounded-xs" title="New Zealand" />
    ),
    Bangladesh: (
      <BD className="w-6 h-4 shadow-sm rounded-xs" title="Bangladesh" />
    ),
    "South Africa": (
      <ZA className="w-6 h-4 shadow-sm rounded-xs" title="South Africa" />
    ),
    Zimbabwe: <ZW className="w-6 h-4 shadow-sm rounded-xs" title="Zimbabwe" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {playersData.map((player, index) => (
        <div
          key={index}
          className="card bg-base-100  border border-gray-200 shadow-sm rounded-3xl p-6"
        >
          <figure className="hover-3d w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mb-5">
            <img
              src={player.playerImage}
              alt={player.playerName}
              className="w-full h-full object-contain"
            />
          </figure>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User size={24} className="text-gray-700 fill-gray-700" />
              <h2 className="text-xl font-bold tracking-tight text-neutral-800">
                {player.playerName}
              </h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                {flags[player.playerCountry]}
                <span>{player.playerCountry}</span>
              </div>
              <div className="badge badge-neutral bg-gray-100 border-none text-gray-800 py-3.5 px-3 rounded-lg text-sm font-medium">
                {player.playerType}
              </div>
            </div>

            <div className="h-[1px] bg-gray-200"></div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Rating</span>
                <span className="text-gray-500 font-medium">
                  {player.rating}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Batting Style</span>
                <span className="text-gray-500 font-medium">
                  {player.battingStyle}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Bowling Style</span>
                <span className="text-gray-500 font-medium">
                  {player.bowlingStyle}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <div className="flex flex-row">
                <span className="font-bold text-gray-800 text-sm">Price: </span>
                <span className="font-bold text-gray-800 text-sm">
                  ${player.price.toLocaleString()}
                </span>
              </div>
              <button className="btn btn-outline h-10 min-h-10 px-4 rounded-lg border-gray-300 normal-case font-semibold hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
