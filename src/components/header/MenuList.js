import { useEffect, useState } from "react";
import MenuButton from "../UI/MenuButton";
import classes from "./MenuList.module.css";
const MenuList = (props) => {
  const [active, setActive] = useState();

  const activeButton = (value) => {
    setActive(value);
    props.onActiveTab(value);
  };
  useEffect(() => {
    setActive("mercury");
  }, []);
  return (
    <ul className={classes.planet_list}>
      <div className={classes.logo}>the planets</div>
      <div className={classes.buttons}>
        {" "}
        {props.planets.map((planet) => (
          <MenuButton
            onChange={activeButton}
            key={planet.id}
            title={planet.title}
            className={`${classes[planet.title]} ${
              active === planet.title && classes.active
            } `}
          />
        ))}
      </div>
    </ul>
  );
};

export default MenuList;
