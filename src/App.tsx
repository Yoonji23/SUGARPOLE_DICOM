import { useState } from "react";
import "./App.css";
import { DicomView } from "./pages/DicomView";
import { Header } from "./components/common/Header";

function App() {
  const [feature, setFeature] = useState<string | null>(null);
  const handleClickFeature = (feat: string) => {
    setFeature(feat);
  };
  return (
    <div>
      <Header handleClickFeature={handleClickFeature} />
      <DicomView feature={feature} setFeature={setFeature} />
    </div>
  );
}

export default App;
