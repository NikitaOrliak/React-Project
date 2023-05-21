import React from "react";
import MainPageNavigation from "./MainPageNavigation";
import { Link } from "react-router-dom";

function HowToUse() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <MainPageNavigation />
            </div> 
            <div className="fullPageWoutNavigation mainPage">
                <h1>Як користуватися сайтом?</h1>
                <h2>На сайті присутньо декілька основних вкладок:</h2>
                <div>
                <h3><Link to="/AppliedLogicInfo" className="table"  style={{'color': 'black'}}>Прикладна логіка</Link></h3>
                    <p>Вкладка <b><em><Link to="/AppliedLogicInfo" className="table"  style={{'color': 'black'}}> "Прикладна логіка" </Link></em></b> розповідає про Прикладну Логіку, а саме:
                        <ul>
                            <li><Link to="/AppliedLogicInfo" className="table"  style={{'color': 'black'}}>Передмова</Link></li>
                            <li><Link to="/AppliedLogicUses" className="table"  style={{'color': 'black'}}>Прикладна логіка</Link></li>
                            <li><Link to="/AppliedLogicPractice" className="table"  style={{'color': 'black'}}>Практичне значення</Link></li>
                        </ul>
                        Також, окрім цього, які існують інші види логік, її формування, що таке 
                        <b> Логіка </b> в цілому та як формальна логіка перетворюється у прикладну.
                    </p>

                <hr />

                <h3><Link to="/QuasiPredicatesLogicInfo" className="table"  style={{'color': 'black'}}>Логіки квазіарних предикатів</Link></h3>
                    <p>Вкладка <b><em><Link to="/QuasiPredicatesLogicInfo" className="table"  style={{'color': 'black'}}> "Логіки квазіарних предикатів" </Link></em></b> надасть таку інформацію про Логічні системи:
                        <ul>
                            <li><Link to="/QuasiPredicatesLogicInfo" className="table"  style={{'color': 'black'}}>Логіки квазіарних предикатів</Link></li>
                            <li><Link to="/QuasiPredicatesLogicUses" className="table"  style={{'color': 'black'}}>Предакатні композиційні системи</Link></li>
                            <li><Link to="/QuasiPredicatesLogicPractice" className="table"  style={{'color': 'black'}}>Першопорядкові логіки квазіарних предикатів</Link></li>
                            <li><Link to="/QuasiPredicatesLogicSequent" className="table"  style={{'color': 'black'}}>Секвенційні числення</Link></li>
                        </ul>
                        Та додаткову інформацію про створення історію Логіки квазіарних предикатів, її практичне значення, 
                        приклади та опис Предакатних композиційніх систем, Першопорядкових логік квазіарних предикатів та Секвенційних числень.
                    </p>

                <hr />

                <h3><Link to="/SequentCalculusInfo" className="table"  style={{'color': 'black'}}>Нетрадиційні та модальні логіки</Link></h3>
                    <p>Вкладка <b><em><Link to="/SequentCalculusInfo" className="table"  style={{'color': 'black'}}> "Нетрадиційні та модальні логіки" </Link></em></b> надасть таку інформацію про Формальну логіка:
                        <ul>
                            <li><Link to="/SequentCalculusInfo" className="table"  style={{'color': 'black'}}>Логіки предикатів</Link></li>
                            <li><Link to="/SequentCalculusUses" className="table"  style={{'color': 'black'}}>Нетрадиційні логіки</Link></li>
                            <li><Link to="/SequentCalculusPractice" className="table"  style={{'color': 'black'}}>Модальні логіки</Link></li>
                        </ul>
                        І надасть практичне значення, опис, а також
                            приклади Логіки предикатів, Нетрадиційної та Модальної логік.
                    </p>

                <hr />

                    <h3><Link to="/AboutMe" className="table"  style={{'color': 'black'}}>Інформація про автора</Link></h3>
                    <p>На вкладці <b><em><Link to="/AboutMe" className="table"  style={{'color': 'black'}}> "Інформація про автора" </Link></em></b> присутня інформація про мене. 
                        Загальна інформація, мій досвід роботи та як зі мною зв'язатися.
                    </p>
                </div>
            </div>
            

        </div>
    )
}

export default HowToUse