import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/PlayersData.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(5000000000);

  return (
    <>
      <Nav coin={coin} />
      <Banner></Banner>

      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
