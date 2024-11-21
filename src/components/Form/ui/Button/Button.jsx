import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ type = "button", color = "green", children }) {
  return (
    <button className={`${styles.button} ${styles[color]}`} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.oneOf(["green", "white"]),
  children: PropTypes.node.isRequired,
};
