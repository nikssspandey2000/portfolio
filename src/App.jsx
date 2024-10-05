import React from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-80 cursor-default">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
