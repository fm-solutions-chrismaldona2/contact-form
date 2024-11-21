import styles from "./Label.module.css";
import PropTypes from "prop-types";

export default function Label({ htmlFor, required, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
      {required && <span className={styles["label--required__icon"]}>*</span>}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
