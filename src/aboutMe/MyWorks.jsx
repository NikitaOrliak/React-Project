import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutMeNavigation from "./AboutMeNavigation";

function MyWorks() { //My sytes?? Github?? -------------------------------------

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <AboutMeNavigation />
            </div> 
            <div className="fullPageWoutNavigation aboutMe">
            <div className="work">
                <h3>Weather</h3>
                <a href="https://nikitaorliak.github.io/Sites/Weather/index.html" target="_blank"> 
                    <img src={require("./imgs/Weather.jpg")} ></img>
                </a>
            </div>
            <div className="work">
            <h3>Grab & Drop</h3>
                <a href="https://nikitaorliak.github.io/Sites/GrabNDrop/index.html" target="_blank"> 
                    <img src={require("./imgs/GrabNDrop.jpg")} ></img>
                </a>
            </div>
            <div className="work">
            <h3>Seasons</h3>
                <a href="https://nikitaorliak.github.io/Sites/Seasons/index.html" target="_blank"> 
                    <img src={require("./imgs/Seasons.jpg")} ></img>
                </a>
            </div>
            <div className="work"> 
            <h3>Mini-Game</h3>
                <a href="https://nikitaorliak.github.io/Sites/Mini-Game/index.html" target="_blank"> 
                    <img src={require("./imgs/Mini-Game.jpg")} ></img>
                </a>
            </div>
            <div className="work"> 
            <h3>Browser-Game</h3>
                <a href="https://nikitaorliak.github.io/Sites/Browser-Game/index.html" target="_blank"> 
                    <img src={require("./imgs/Browser-Game.jpg")} ></img>
                </a>
            </div>
            <div className="GitHub">
                <h3>My GitHub: <a href="https://github.com/NikitaOrliak" target="_blank">Nikita Orliak</a></h3>
            </div>
            </div>
            

        </div>
    )
}

export default MyWorks

