import styles from "./ContactForm.module.css";
import {
  Label,
  Input,
  Checkbox,
  Radio,
  TextArea,
  Button,
  ErrorMessage,
} from "formUI";
import Popup from "components/Popup/Popup";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const validationSchemas = {
  firstName: {
    required: "This field is required",
    minLength: { value: 2, message: "Must be at least 2 characters" },
    maxLength: { value: 50, message: "Must be less than 50 characters" },
    validate: (value) =>
      value.trim().length > 0 || "First name cannot be empty",
  },
  lastName: {
    required: "This field is required",
    minLength: { value: 2, message: "Must be at least 2 characters" },
    maxLength: { value: 50, message: "Must be less than 50 characters" },
    validate: (value) => value.trim().length > 0 || "Last name cannot be empty",
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address",
    },
  },
  message: {
    required: "This field is required",
    minLength: {
      value: 5,
      message: "Message must be at least 5 characters long",
    },
    maxLength: {
      value: 500,
      message: "Message must be less than 500 characters",
    },
  },
  queryType: { required: "Please select a query type" },
  acceptTerms: {
    required: "To submit this form, please consent to being contacted",
  },
};

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      acceptTerms: false,
    },
  });

  const onSubmit = () => {
    setIsSuccess(true);
    reset();
  };

  return (
    <>
      {isSuccess && (
        <Popup
          type="success"
          message="Message sent!"
          info="Thanks for completing the form. We'll be in touch soon!"
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.form__title}>Contact Us</h1>
        <section className={styles.form__body}>
          <div className={styles.form__column}>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              required
              register={register}
              validationSchema={validationSchemas.firstName}
              errors={errors.firstName}
            />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              required
              register={register}
              validationSchema={validationSchemas.lastName}
              errors={errors.lastName}
            />
          </div>
          <Input
            type="text"
            id="email"
            name="email"
            label="Email Address"
            required
            register={register}
            validationSchema={validationSchemas.email}
            errors={errors.email}
          />

          <div className={styles.form__box}>
            <Label htmlFor="generalEnquiry" required>
              Query Type
            </Label>
            <div className={styles.form__column}>
              <Radio
                name="queryType"
                id="generalEnquiry"
                value="generalEnquiry"
                label="General Enquiry"
                required
                register={register}
                validationSchema={validationSchemas.queryType}
              />
              <Radio
                name="queryType"
                id="supportRequest"
                value="supportRequest"
                label="Support Request"
                required
                register={register}
                validationSchema={validationSchemas.queryType}
              />
            </div>
            <AnimatePresence mode="wait">
              {errors?.queryType && errors.queryType.message && (
                <ErrorMessage>{errors.queryType.message}</ErrorMessage>
              )}
            </AnimatePresence>
          </div>

          <TextArea
            id="message"
            name="message"
            label="Message"
            required
            register={register}
            validationSchema={validationSchemas.message}
            errors={errors?.message}
          />
        </section>

        <Checkbox
          id="terms"
          name="acceptTerms"
          label="I consent to being contacted by the team"
          required
          register={register}
          validationSchema={validationSchemas.acceptTerms}
          errors={errors.acceptTerms}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
