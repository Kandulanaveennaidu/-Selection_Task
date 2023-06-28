import part1Image from "../image/img1.jpg";
import part2Image from "../image/img2.jpg";
import part3Image from "../image/img3.jpg";
import { motion } from "framer-motion";
import "../styles/PartsSelection.css";
const PartsSelection = ({
  selectedParts,
  onPartSelection,
  onNextScreen,
  onPreviousScreen,
}) => {
  const parts = [
    { id: 1, name: "Part 1", image: part1Image },
    { id: 2, name: "Part 2", image: part2Image },
    { id: 3, name: "Part 3", image: part3Image },
  ];

  const handlePartSelection = (part) => {
    onPartSelection(part);
  };

  const handleNextScreen = () => {
    onNextScreen();
  };

  const handlePreviousScreen = () => {
    onPreviousScreen();
  };

  return (
    <div className="parts-selection">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Parts Selection
      </motion.h2>
      <div className="parts-container">
        {parts.map((part) => (
          <motion.div
            key={part.id}
            className="part"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={part.image} alt={part.name} />
            <span>{part.name}</span>
            <input
              type="checkbox"
              onChange={() => handlePartSelection(part)}
              checked={selectedParts.includes(part)}
            />
          </motion.div>
        ))}
      </div>
      <button onClick={handlePreviousScreen}>Previous</button>
      <button onClick={handleNextScreen}>Next</button>
    </div>
  );
};

export default PartsSelection;
