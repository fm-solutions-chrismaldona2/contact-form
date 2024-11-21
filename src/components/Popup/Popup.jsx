import styles from "./Popup.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const getIcon = (type) => {
  switch (type) {
    case "success":
      return (
        <svg
          className={styles.popup__icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            fill="#fff"
            d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          className={styles.popup__icon}
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
          fill="undefined"
        >
          <path d="M479.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-432h72v-240h-72v240Zm36.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
        </svg>
      );
    default:
      return;
  }
};

export default function Popup({
  type = "success",
  message,
  info,
  timeOut = 3000,
}) {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.popup}
        >
          <section className={styles.popup__header}>
            {getIcon(type)}
            <span className={styles.popup__message}>{message}</span>
          </section>
          {info && (
            <section className={styles.popup__body}>
              <span className={styles.popup__info}>{info}</span>
            </section>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Popup.propTypes = {
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  message: PropTypes.string.isRequired,
  info: PropTypes.string,
  timeOut: PropTypes.number,
};
