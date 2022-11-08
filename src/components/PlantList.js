import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {

const [plantData, setPlantData] = useState('');

  useEffect(()=>{
fetch("http://localhost:6001/plants")
.then (res=>res.json())
.then ((plants)=> {

setPlantData(plants)

})
  }, [])
  

  return (
    <div>
      <ul className="cards">{/* render PlantCards components in here */}</ul>
      <PlantCard />
    </div>
  );
}

export default PlantList;
