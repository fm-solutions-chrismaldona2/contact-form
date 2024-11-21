import styles from "./ErrorMessage.module.css";
import { motion } from "motion/react";
import PropTypes from "prop-types";

export default function ErrorMessage({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.4 }}
      className={styles.error}
    >
      {children}
    </motion.span>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
