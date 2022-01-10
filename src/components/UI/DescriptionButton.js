import classes from "./DescriptionButton.module.css";
const DescriptionButton = (props) => {
  const clickHandler = (keyID) => {
    props.onChange(keyID);
  };
  return (
    <button
      className={`${classes.DescriptionButton} ${classes[props.name]} ${classes[props.className]}`}
      onClick={() => {
        clickHandler(props.val);
      }}
    >
      <span className={classes.number}>{props.number}</span> {props.children}
    </button>
  );
};

export default DescriptionButton;
