// react component: main design for all the pages!
import ter1 from "../../assets/ternurines-pics/ter1.png";
import ter2 from "../../assets/ternurines-pics/ter2.jpg";
import FlowerDesign from "../FlowerDesign/FlowerDesign.js";
import { CardQuestion } from "../CardQuestion/CardQuestion.js";
import { useState } from "react";
import { PlansProposal } from "../PlansProposal/PlansProposal.js";

export const MainDesign = () => {
  const [dateAccepted, setDateAccepted] = useState(false);

  return (
    <div className="first-div">
      <FlowerDesign />
      <header className="first-header">
        <img className="ter1" src={ter2} alt="Ternurin painting."></img>
        <h1>Planning our date!</h1>
        <img className="ter2" src={ter1} alt="Ternurin with a custome."></img>
      </header>

      {dateAccepted ? (
        <PlansProposal />
      ) : (
        <CardQuestion onYesClick={() => setDateAccepted(true)} />
      ) 
      }
    </div>
  );
};
