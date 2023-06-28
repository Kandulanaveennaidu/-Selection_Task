import { motion } from "framer-motion";
import "../styles/ProductDescription.css";
import image from "../image/img4.jpg";

const ProductDescription = ({ onStart }) => {
  const handleStart = () => {
    onStart();
  };

  return (
    <div className="product-description">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="product-description-heading"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Product
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Description
        </motion.span>
      </motion.h2>
      <div className="product-image-container">
        <motion.img
          src={image}
          alt="Product"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="product-image"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleStart}
        className="start-button"
      >
        START
      </motion.button>
    </div>
  );
};

export default ProductDescription;
