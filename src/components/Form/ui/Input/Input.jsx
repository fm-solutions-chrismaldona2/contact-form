import styles from "./Input.module.css";
import { Label, ErrorMessage } from "formUI";
import { AnimatePresence } from "motion/react";
import PropTypes from "prop-types";

export default function Input({
  type = "text",
  id,
  name,
  label,
  placeholder,
  required,
  register,
  validationSchema,
  errors,
  ...props
}) {
  return (
    <div>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <input
        className={`${styles.input} ${errors && styles.error}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...props}
      />
      <AnimatePresence mode="wait">
        {errors?.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </AnimatePresence>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
};
