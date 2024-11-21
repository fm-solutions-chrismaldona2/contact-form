import styles from "./TextArea.module.css";
import { Label, ErrorMessage } from "formUI";
import { AnimatePresence } from "motion/react";
import PropTypes from "prop-types";

export default function TextArea({
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
      <textarea
        className={`${styles.textarea} ${errors && styles.error}`}
        name={name}
        id={id}
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
TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
};
