import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import LoadingPage from "./components/home/LoadingPage";
import MenuPage from "./components/home/MenuPage";

function App() {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, [12000]);
  }, []);

  return (
    <>
      {!loading ? (
        <LoadingPage />
      ) : (
        <>
          {menu ? (
            <>
              <MenuPage setMenu={setMenu} />
            </>
          ) : (
            <>
              <Header setMenu={setMenu} />
              <Home />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
