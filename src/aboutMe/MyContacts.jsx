import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutMeNavigation from "./AboutMeNavigation";

function MyContacts() {

    return (
        <div className="fullPageWithNavigation">  
            <div>
                <AboutMeNavigation />
            </div> 
            <div className="fullPageWoutNavigation aboutMe">
                <div className="card">
                    <h1>Contact me</h1>

                    <p><b>Mobile number:</b> <a href="tel:+380665180944">+38 (066) 51 809 44</a></p>
                    <p><b>Email 1:</b> <a href="mailto:nikitonorl@gmail.com">nikitonorl@gmail.com</a></p>
                    <p><b>Email 2:</b> <a href="mailto:nikitonorl@knu.ua">nikitonorl@knu.ua</a></p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default MyContacts