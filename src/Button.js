import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
