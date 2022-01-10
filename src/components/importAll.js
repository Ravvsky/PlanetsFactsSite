import classes from "./importAll.module.css"
function ImportAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = ImportAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

const Image = (props) => {
  return (
    <div className={`${classes.container} ${classes[props.planet]} ${classes[props.size]}`}>
      <img src={images[props.src]} alt={props.alt} ></img>
      <img src={images[`geology-${props.planet}.png`]} alt={props.alt} className={`${classes.geology} ${props.geology && (`${classes[`${props.size}-geology`]}`)}`}></img>
    </div>
  );
};

export default Image;
