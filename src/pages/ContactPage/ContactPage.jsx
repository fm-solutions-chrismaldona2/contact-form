import styles from "./ContactPage.module.css";
import ContactForm from "components/Form/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <>
      <main className={styles.main}>
        <ContactForm />
        <div className={styles["developer-info"]}>
          <span>Developed by </span>
          <a href="https://github.com/chrismaldona2" target="_blank">
            Christian Maldonado
          </a>
        </div>
      </main>
    </>
  );
}
