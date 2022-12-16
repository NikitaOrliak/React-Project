import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutMeNavigation from "./AboutMeNavigation";

function AboutMe() {

    return (
        <div className="fullPageWithNavigation">  
            <div>
                <AboutMeNavigation />
            </div> 
            <div className="fullPageWoutNavigation aboutMe">
                <div className="Description">
                    <div className="card">
                        <div className="info">
                            <img src={require("./imgs/me.jpg")} alt="literally me" className="Avatar" />
                            <div className="text-info">
                                <h1>My name is Nikita</h1>
                                <p>I'm 20 years old</p>
                                <p><strong>That's my first React Site</strong></p>
                            </div>
                        </div>
                        <hr />
                    </div>    
                </div> 
                <div className="card">
                    <h1>Social medias</h1>
                    <a href="https://t.me/ultrafiolet_nikita" target="_blank">Telegram</a>
                    |
                    <a href="https://www.instagram.com/ultrafioletnikita/?next=%2F" target="_blank">Instagram</a>
                    |
                    <a href="https://www.twitch.tv/nathanonlife" target="_blank">Twitch</a>
                    <hr />
                </div>
                <div className="card">
                    <h1>Work expirience</h1>
                    <div className="ttt">
                        <table className="Table">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Title</th>
                                    <th>Years</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                </tr>
                                <tr>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default AboutMe

