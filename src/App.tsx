import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Main } from "./Pages/Main";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
