import { useEffect, useState } from "react"
import Image from "../importAll"
const PlanetImage = (props) => {
const [image, setImage] = useState()
const [geology, setGeology] = useState(false)

useEffect(()=>{

    if (props.activeButton === 'overview') {
        setImage(`planet-${props.activePlanet}.svg`)
    }
    else if(props.activeButton === 'structure') {
        setImage(`planet-${props.activePlanet}-internal.svg`)
    }

    if (props.activeButton === 'geology') {
        setImage(`planet-${props.activePlanet}.svg`)
        setGeology(true)
    }
    else{setGeology(false)}

}, [props])

return (

    <Image src={image} geology={geology} planet={props.activePlanet} size={props.size}/>
)
}

export default PlanetImage