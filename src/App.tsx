import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DicomView } from "./pages/DicomView";
import { Header } from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <DicomView />
    </div>
  );
}

export default App;
