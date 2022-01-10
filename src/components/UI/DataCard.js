import classes from "./DataCard.module.css"
import AnimatedNumber from "animated-number-react";
import { useEffect, useState } from "react";


const DataCard = (props) => {
    const [number, setNumber] = useState()
    const [unit, setUnit] = useState()

useEffect(()=>{
    setNumber(props.number)
    setUnit(<span className={classes.unit}>{props.unit}</span>)
},[props])

const formatValue = (number) => (parseFloat((number).toFixed(2)).toLocaleString('en'))
    return (<div className={classes.main}>
        <span className={classes.title}>{props.title}</span>

        <div>
        <AnimatedNumber value={number} formatValue={formatValue} duration='1500' className={classes.number}> <span className={classes.unit}>{props.unit}</span></AnimatedNumber>
        <span className={classes.unit}> {props.unit}</span>
        </div>
    </div>)
}

export default DataCard