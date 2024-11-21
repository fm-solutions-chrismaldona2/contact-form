import styles from "./Radio.module.css";
import { Label } from "formUI";
import PropTypes from "prop-types";

export default function Radio({
  id,
  name,
  value,
  label,
  register,
  validationSchema,
}) {
  return (
    <div className={styles.radio__container} htmlFor={id}>
      <input
        type="radio"
        className={styles.radio}
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
      />
      <label className={styles["custom-radio__container"]} htmlFor={id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
          className={styles["custom-radio"]}
        >
          <path
            fill="#0C7D69"
            d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"
          />
        </svg>
        <Label htmlFor={id}>{label}</Label>
      </label>
    </div>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
};
