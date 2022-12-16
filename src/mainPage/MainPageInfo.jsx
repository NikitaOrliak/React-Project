import React from "react";
import MainPageNavigation from "./MainPageNavigation";

function MainPageInfo() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <MainPageNavigation />
            </div> 
            <div className="fullPageWoutNavigation mainPage">
            
            <h1 className="mainH1"><em>Вітаю в електроному підручнику з Прикладної логіки!</em></h1>
            <p><em>Тут ви знайдете інформацію саму <b>Прикладну логіку</b> та <b>Секвенційні числення</b>. 

            <br /> 
            <br />

                Для чого вони потрібні, де та як використовуються, а також загальну 
                інформацію та списки джерел для їх вивчення. </em>
            </p>

            </div>
            

        </div>
    )
}

export default MainPageInfo