import css from "./ErrorMessage.module.css";

const errorMessage = () => {
  return <p className={css.text}>There was an error, please try again...</p>;
};

export default errorMessage;
