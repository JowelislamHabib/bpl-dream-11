import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import Players from "./Components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Nav />
      <Banner></Banner>

      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
