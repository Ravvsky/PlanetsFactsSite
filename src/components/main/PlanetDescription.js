import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./PlanetDescription.module.css";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import DescriptionButton from "../UI/DescriptionButton";
import { useEffect, useState } from "react";

const PlanetDescription = (props) => {
  const [active, setActive] = useState();

  const activeButton = (value) => {
    setActive(value);
    console.log(value);
  };

  useEffect(() => {
    setActive("overview");
  }, []);

  useEffect(() => {
    props.onActiveButton(active);
  }, [active]);

  return (
    <div className={classes.main}>
      <div className={classes.info}>
        <h1>{props.planetData.title}</h1>
        <p>{props.planetData[active]}</p>
        <div className={`${classes.source} `}>
          <span>Source: </span>
          <a href="wikipedia.org">Wikipedia </a>
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
        </div>
      </div>
      <div className={classes.buttons}>
        <DescriptionButton
          number="01"
          className={active === "overview" && "active"}
          onChange={activeButton}
          val="overview"
          name={props.planetData.id}
        >
          overview
        </DescriptionButton>
        <DescriptionButton
          number="02"
          className={active === "structure" && "active"}
          onChange={activeButton}
          val="structure"
          name={props.planetData.id}
        >
          Internal structure
        </DescriptionButton>
        <DescriptionButton
          number="03"
          className={active === "geology" && "active"}
          onChange={activeButton}
          val="geology"
          name={props.planetData.id}
        >
          surface geology
        </DescriptionButton>
      </div>
    </div>
  );
};

export default PlanetDescription;
