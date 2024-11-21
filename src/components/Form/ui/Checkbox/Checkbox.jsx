import styles from "./Checkbox.module.css";
import { Label, ErrorMessage } from "formUI";
import { AnimatePresence } from "motion/react";
import PropTypes from "prop-types";

export default function Checkbox({
  id,
  name,
  label,
  required,
  register,
  validationSchema,
  errors,
}) {
  return (
    <div className={styles.checkbox__container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={name}
        id={id}
        {...register(name, validationSchema)}
      />

      <label htmlFor={id} className={styles["custom-checkbox__container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
          className={styles["custom-checkbox"]}
        >
          <path
            fill="#0C7D69"
            d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
          />
        </svg>
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      </label>
      <AnimatePresence mode="wait">
        {errors?.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </AnimatePresence>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
};
