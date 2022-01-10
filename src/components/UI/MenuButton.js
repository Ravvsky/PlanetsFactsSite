import classes from "./MenuButton.module.css";
const MenuButton = (props) => {

const clickHandler = (keyID) =>{
    props.onChange(keyID)
}
    return (
      <li>
        <div
          className={`${classes.menubutton} ${props.className} `}
          key={props.title}
          onClick={()=>{clickHandler(props.title)}}
        >
          {props.title}
        </div>
      </li>
    );
  };

export default MenuButton;
