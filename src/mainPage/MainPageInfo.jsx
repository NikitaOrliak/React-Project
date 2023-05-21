import React from "react";
import MainPageNavigation from "./MainPageNavigation";
import { Link } from "react-router-dom";

function MainPageInfo() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <MainPageNavigation />
            </div> 
            <div className="fullPageWoutNavigation mainPage">
            
            <h1 className="mainH1"><em>Вітаю в електроному підручнику з Прикладної логіки!</em></h1>
            <p><em>Тут ви знайдете інформацію про <b>Прикладну логіку</b> та її розділи: <br /> <br />
            - <Link to="/QuasiPredicatesLogicInfo" className="table"  style={{'color': 'black'}}>Програмно-орієнтовані моделі логічних систем</Link> <br />
            - <Link to="/QuasiPredicatesLogicUses" className="table"  style={{'color': 'black'}}>Предакатні композиційні системи</Link> <br />
            - <Link to="/QuasiPredicatesLogicPractice" className="table"  style={{'color': 'black'}}>Першопорядкові логіки квазіарних предикатів</Link> <br />
            - <Link to="/QuasiPredicatesLogicSequent" className="table"  style={{'color': 'black'}}>Секвенційні числення</Link> <br />
            - <Link to="/SequentCalculusInfo" className="table"  style={{'color': 'black'}}>Логіки предикатів над номінативними даними</Link> <br />
            - <Link to="/SequentCalculusUses" className="table"  style={{'color': 'black'}}>Нетрадиційні логіки</Link> <br />
            - <Link to="/SequentCalculusPractice" className="table"  style={{'color': 'black'}}>Модальні логіки</Link> <br />

            <br /> 
            <br />

                Для чого вони потрібна, де та як використовуються, а також загальну 
                інформацію та списки джерел для їх вивчення. </em>
            </p>

            </div>
            

        </div>
    )
}

export default MainPageInfo