import React from "react";
import QuasiPredicatesLogicNavigation from "./QuasiPredicatesLogicNavigation";
import { Link } from "react-router-dom";

function QuasiPredicatesLogicUses() {

    const handleClickScroll1 = (el) => {
        const element = document.getElementById('1');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll2 = (el) => {
        const element = document.getElementById('2');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll3 = (el) => {
        const element = document.getElementById('3');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll4 = (el) => {
        const element = document.getElementById('4');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll5 = (el) => {
        const element = document.getElementById('5');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll6 = (el) => {
        const element = document.getElementById('6');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll7 = (el) => {
        const element = document.getElementById('7');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <QuasiPredicatesLogicNavigation />
            </div> 
            <div className="fullPageWoutNavigation SequentCalculus">
            <h1>Предикатні композиційні системи</h1>
            <p>
            <b>Предикатні композиційні системи </b>(ПКС) - це <em>формальні системи</em>, які використовуються 
            для моделювання та аналізу логічних відношень між об'єктами. Вони базуються на 
            <b> предикатній логіці</b>, де об'єкти представлені за допомогою предикатів, що характеризують 
            їхні властивості, а відношення між об'єктами виражаються за допомогою логічних формул. <br /> <br />

            Історія <b>предикатних композиційних систем</b> починається з розвитку <em>формальної логіки </em>
            в середині 20 століття. Одним з ранніх проривів було введення математичної логіки 
            Готлобом Фреге, який розробив предикатну логіку як основу для формалізації математики. 
            Пізніше було розроблено теорію моделей, що дозволяє математично вивчати властивості 
            предикатних композиційних систем. <br /> <br />
            <b>Предикатні композиційні системи</b> мають велике практичне значення в різних галузях, зокрема 
            в <em>інформатиці, штучному інтелекті, базах даних та мовознавстві</em>. Деякі з їх застосувань включають: <br /> <br />
            1. <b>Мови програмування та компілятори</b>: ПКС використовуються для формалізації семантики мов 
            програмування, розробки компіляторів та інструментів статичного аналізу програм. Вони 
            дозволяють точно визначати семантику мови та виконувати перевірку правильності програм. <br /> <br />
            2. <b>Бази даних</b>: ПКС використовуються для моделювання баз даних та виконання запитів до них. 
            Вони дозволяють формалізувати відношення між об'єктами, задавати умови запитів та виконувати операції над даними. <br /> <br />
            3. <b>Штучний інтелект</b>: ПКС є основою для розвитку експертних систем, систем розпізнавання 
            образів, систем планування та інших інтелектуальних систем. Вони дозволяють моделювати логічні 
            відношення та робити висновки на основі заданих правил та фактів. <br /> <br />
            4. <b>Мовознавство</b>: ПКС використовуються для аналізу та обробки мови, включаючи синтаксичний 
            та семантичний аналіз, машинний переклад та відповіді на запити. Вони допомагають розробляти 
            комп'ютерні моделі мови та забезпечувати автоматичну обробку текстів. <br /> <br />
            Отже, <b>предикатні композиційні системи</b> мають широке застосування у різних галузях, де потрібно 
            моделювати та аналізувати логічні відношення між об'єктами. Вони дозволяють формалізувати та 
            вивчати різні аспекти знання та інформації. <br /> <br />
            </p>

            <hr />

            {/* <h1>Приклади</h1>
            <div className="picturePractice">
                <img src={require("./pngs/1.jpg")} alt="1" className="practice1"/> 
                <img src={require("./pngs/2.jpg")} alt="2" className="practice2"/> 
            </div> */}
            <h1>Підрозділи</h1>
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll1}>2.1 Іменні множини та операції над ними</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll2}>2.2 Квазіарні предикати та їх різновиди</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll3}>2.3 Композиції пропозиційного рівня</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll4}>2.4 Композиції реномінації та розширеної реномінації</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll5}>2.5 Композиції квантифікації</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll6}>2.6 Особливості логік квазіарних предикатів. Елімінація кванторів</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll7}>2.7 Чисті першопорядкові композиційні алгебри квазіарних предикатів</Link> <br />





            <hr />
            <br />
            <div className="picturePractice">
                <img src={require("./first/1.jpg")} alt="1" className="practice1" id="1"/> 
                <img src={require("./first/2.jpg")} alt="2" className="practice1"/> 
                <img src={require("./first/3.jpg")} alt="3" className="practice1"/> 
                <img src={require("./first/4.jpg")} alt="4" className="practice1"/> 
                <img src={require("./first/5.jpg")} alt="5" className="practice1" id="2"/> 
                <img src={require("./first/6.jpg")} alt="6" className="practice1" /> 
                <img src={require("./first/7.jpg")} alt="7" className="practice1"/> 
                <img src={require("./first/8.jpg")} alt="8" className="practice1"/> 
                <img src={require("./first/9.jpg")} alt="9" className="practice1"/> 
                <img src={require("./first/10.jpg")} alt="10" className="practice1" id="3"/>
                <img src={require("./first/11.jpg")} alt="11" className="practice1"/> 
                <img src={require("./first/12.jpg")} alt="12" className="practice1"/> 
                <img src={require("./first/13.jpg")} alt="13" className="practice1"/> 
                <img src={require("./first/14.jpg")} alt="14" className="practice1" id="4"/> 
                <img src={require("./first/15.jpg")} alt="15" className="practice1"/> 
                <img src={require("./first/16.jpg")} alt="16" className="practice1"/> 
                <img src={require("./first/17.jpg")} alt="17" className="practice1"/> 
                <img src={require("./first/18.jpg")} alt="18" className="practice1" id="5"/> 
                <img src={require("./first/19.jpg")} alt="19" className="practice1"/> 
                <img src={require("./first/20.jpg")} alt="20" className="practice1"/>
                <img src={require("./first/21.jpg")} alt="21" className="practice1" id="6"/> 
                <img src={require("./first/22.jpg")} alt="22" className="practice1"/> 
                <img src={require("./first/23.jpg")} alt="23" className="practice1"/> 
                <img src={require("./first/24.jpg")} alt="24" className="practice1"/> 
                <img src={require("./first/25.jpg")} alt="25" className="practice1"/> 
                <img src={require("./first/26.jpg")} alt="26" className="practice1" id="7"/> 
                <img src={require("./first/27.jpg")} alt="27" className="practice1"/> 
                <img src={require("./first/28.jpg")} alt="28" className="practice1"/> 
                <img src={require("./first/29.jpg")} alt="29" className="practice1"/> 

            </div>

            

        
            
            </div>
            

        </div>
    )
}

export default QuasiPredicatesLogicUses