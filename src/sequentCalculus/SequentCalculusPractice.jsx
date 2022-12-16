import React from "react";
import SequentCalculusNavigation from "./SequentCalculusNavigation";

function SequentCalculusPractice() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <SequentCalculusNavigation />
            </div> 
            <div className="fullPageWoutNavigation SequentCalculus">
            <h1>Приклади Секвенційних числень</h1>
            <div className="picturePractice">
                <img src={require("./pngs/practice1.jpg")} alt="practice1" className="practice1"/> 
                <img src={require("./pngs/practice2.jpg")} alt="practice2" className="practice2"/> 
                <img src={require("./pngs/practice3.jpg")} alt="practice3" className="practice3"/> 
            </div>
            <div className="picturePractice">
                <img src={require("./pngs/practice21.jpg")} alt="practice21" className="practice21"/> 
                <img src={require("./pngs/practice22.jpg")} alt="practice22" className="practice22"/> 
            </div>
            <div className="picturePractice">
                <img src={require("./pngs/practice31.jpg")} alt="practice31" className="practice31"/> 
            </div>
            <div className="picturePractice">
                <img src={require("./pngs/practice41.jpg")} alt="practice41" className="practice41"/> 
            </div>
            
            </div>
            

        </div>
    )
}

export default SequentCalculusPractice