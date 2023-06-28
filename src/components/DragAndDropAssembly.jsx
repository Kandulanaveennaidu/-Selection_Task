import { motion } from "framer-motion";
import "../styles/DragAndDropAssembly.css";

const DragAndDropAssembly = ({
  selectedParts,
  onPartRemoval,
  onNextScreen,
  onPreviousScreen,
}) => {
  const handlePartRemoval = (part) => {
    onPartRemoval(part);
  };

  const handleNextScreen = () => {
    onNextScreen();
  };

  const handlePreviousScreen = () => {
    onPreviousScreen();
  };

  return (
    <div className="drag-and-drop-assembly">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Drag and Drop Assembly
      </motion.h2>
      <div className="selected-parts">
        <h3>Selected Parts:</h3>
        {selectedParts.map((part) => (
          <motion.div
            key={part.id}
            className="selected-part"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={part.image} alt={part.name} />
            <span>{part.name}</span>
            <button onClick={() => handlePartRemoval(part)}>Remove</button>
          </motion.div>
        ))}
      </div>
      <button onClick={handlePreviousScreen}>Previous</button>
      <button onClick={handleNextScreen}>Next</button>
    </div>
  );
};

export default DragAndDropAssembly;
