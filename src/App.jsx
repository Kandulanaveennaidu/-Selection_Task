import { useState } from "react";
import ProductDescription from "./components/ProductDescription";
import PartsSelection from "./components/PartsSelection";
import DragAndDropAssembly from "./components/DragAndDropAssembly";
import FinalProductView from "./components/FinalProductView";
import "./App.css";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedParts, setSelectedParts] = useState([]);

  const handleStart = () => {
    setCurrentScreen(2);
  };

  const handlePartSelection = (part) => {
    setSelectedParts((prevSelectedParts) => [...prevSelectedParts, part]);
  };

  const handlePartRemoval = (part) => {
    setSelectedParts((prevSelectedParts) =>
      prevSelectedParts.filter((selectedPart) => selectedPart !== part)
    );
  };

  const handleNextScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  const handlePreviousScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen - 1);
  };

  const handleReset = () => {
    setSelectedParts([]);
    setCurrentScreen(1);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <ProductDescription onStart={handleStart} />;
      case 2:
        return (
          <PartsSelection
            selectedParts={selectedParts}
            onPartSelection={handlePartSelection}
            onNextScreen={handleNextScreen}
            onPreviousScreen={handlePreviousScreen}
          />
        );
      case 3:
        return (
          <DragAndDropAssembly
            selectedParts={selectedParts}
            onPartRemoval={handlePartRemoval}
            onNextScreen={handleNextScreen}
            onPreviousScreen={handlePreviousScreen}
          />
        );
      case 4:
        return (
          <FinalProductView
            selectedParts={selectedParts}
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  };

  return <div className="app-container">{renderScreen()}</div>;
};

export default App;
