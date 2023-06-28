import { motion } from "framer-motion";
import "../styles/FinalProductView.css";
const FinalProductView = ({ selectedParts, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="final-product-view">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Final Product View
      </motion.h2>
      <div className="assembled-parts">
        {selectedParts.map((part) => (
          <motion.div
            key={part.id}
            className="assembled-part"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={part.image} alt={part.name} />
            <span>{part.name}</span>
          </motion.div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FinalProductView;
