import React from "react";
import QuasiPredicatesLogicNavigation from "./QuasiPredicatesLogicNavigation";
import { Link } from "react-router-dom";

function QuasiPredicatesLogicInfo() {

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

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <QuasiPredicatesLogicNavigation />
            </div> 
            <div className="fullPageWoutNavigation QuasiPredicatesLogic SequentCalculus">
            <h1>Програмно-орієнтовані моделі логічних систем</h1>
            <p>
            <b>Програмно-орієнтовані моделі логічних систем</b> - це підхід до використання <em>логічних систем</em>, 
            де акцент робиться на програмному втіленні <em>логічних правил та процесів</em>. 
            Цей підхід поєднує логічні принципи з комп'ютерним програмуванням для створення <em>ефективних та гнучких</em> <b>логічних систем</b>. <br /> <br />

            В розділі розглядаються питання побудови адекватних логічних формалізмів, 
            орієнтованих на різноманітні задачі <b>програмування й моделювання</b>. 
            Вказано особливе місце <b>класичної логіки предикатів</b> серед <em>логічних формалізмів</em>, описано її позитивні вартості. 
            Водночас наведено принципові обмеження <em>класичної логіки</em>, які ускладнюють її використання в програмуванні та моделюванні.
            Такі обмеження мотивують необхідність побудови нових логік, які більше орієнтовані на потреби інформатики й програмування. <br /> <br />

            Наведено спектр <b>композиційно-номінативних логік</b> за рівнем <em>абстракції розгляду</em>. 
            Описано різновиди <b>КНЛ</b> за обмеженнями на клас <em>квазіарних предикатів</em>. 

            <b>Програмно-орієнтовані моделі логічних систем</b> знаходять застосування в різних галузях, включаючи: <br /> <br />
            1. <b>Штучний інтелект</b>: <b>Програмно-орієнтовані логічні системи</b> використовуються для 
            розв'язання задач <em>розпізнавання образів, експертних систем, прийняття рішень та інших задач інтелектуального аналізу даних</em>. <br /> <br />
            2. <b>Бази знань</b>: Використання <b>програмно-орієнтованих моделей</b> дозволяє створювати гнучкі бази знань, 
            де логічні правила та факти використовуються для представлення знань та виконання логічних запитів. <br /> <br />
            3. <b>Мови запитів до баз даних</b>: <b>Програмно-орієнтовані моделі логічних систем</b>, такі як <em>SQL</em>, 
            дозволяють виконувати складні логічні запити до баз даних та аналізувати дані за допомогою логічних правил. <br /> <br />
            Це лише кілька прикладів використання <b>програмно-орієнтованих моделей логічних систем</b>, 
            які демонструють їх широкий спектр застосування у різних галузях. 
            Вони дозволяють ефективно використовувати логічні правила та алгоритми для розв'язання складних завдань і аналізу даних. <br /> <br />


            Отже, <b>програмно-орієнтовані моделі логічних систем</b> є корисним інструментом для 
            <em> виконання складних логічних запитів, розв'язання задач штучного інтелекту та аналізу даних</em>. 
            Вони дозволяють гнучко використовувати логічні правила та алгоритми, що спрощує процес моделювання та розв'язання проблем. 
            <b>Програмно-орієнтовані моделі логічних систем</b> знаходять застосування в широкому спектрі галузей, 
            включаючи <em>штучний інтелект, бази знань та мови запитів до баз даних</em>. 
            Цей підхід дозволяє ефективно використовувати логічні принципи та алгоритми для 
            розв'язання різноманітних завдань, що робить його цінним інструментом для аналізу та обробки інформації.
            </p>

            <hr />

            <h1>Підрозділи</h1>
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll1}>1.1 Логіка та програмування</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll2}>1.2 Розвиток основних понять логіки</Link> <br />
            <Link style={{'text-decoration': 'none', 'color': 'black', 'fontSize': '18px', 'fontWeight': 'bold'}} 
            onClick={handleClickScroll3}>1.3 Спектр композиційно-номінативних логік</Link> <br />

            <hr />
            <br />
            <div className="picturePractice">
                <img src={require("./seventh/1.jpg")} alt="1" className="practice1"/> 
                <img src={require("./seventh/2.jpg")} alt="2" className="practice1" id="1"/> 
                <img src={require("./seventh/3.jpg")} alt="3" className="practice1"/> 
                <img src={require("./seventh/4.jpg")} alt="4" className="practice1"/> 
                <img src={require("./seventh/5.jpg")} alt="5" className="practice1"/> 
                <img src={require("./seventh/6.jpg")} alt="6" className="practice1" /> 
                <img src={require("./seventh/7.jpg")} alt="7" className="practice1"/> 
                <img src={require("./seventh/8.jpg")} alt="8" className="practice1"/> 
                <img src={require("./seventh/9.jpg")} alt="9" className="practice1"/> 
                <img src={require("./seventh/10.jpg")} alt="10" className="practice1"/>
                <img src={require("./seventh/11.jpg")} alt="11" className="practice1"/> 
                <img src={require("./seventh/12.jpg")} alt="12" className="practice1"/> 
                <img src={require("./seventh/13.jpg")} alt="13" className="practice1"/> 
                <img src={require("./seventh/14.jpg")} alt="14" className="practice1" id="2"/> 
                <img src={require("./seventh/15.jpg")} alt="15" className="practice1"/> 
                <img src={require("./seventh/16.jpg")} alt="16" className="practice1"/> 
                <img src={require("./seventh/17.jpg")} alt="17" className="practice1"/> 
                <img src={require("./seventh/18.jpg")} alt="18" className="practice1"/> 
                <img src={require("./seventh/19.jpg")} alt="19" className="practice1"/> 
                <img src={require("./seventh/20.jpg")} alt="20" className="practice1"/>
                <img src={require("./seventh/21.jpg")} alt="21" className="practice1"/> 
                <img src={require("./seventh/22.jpg")} alt="22" className="practice1"/> 
                <img src={require("./seventh/23.jpg")} alt="23" className="practice1" id="3"/> 
                <img src={require("./seventh/24.jpg")} alt="24" className="practice1"/> 
                <img src={require("./seventh/25.jpg")} alt="25" className="practice1"/> 
                <img src={require("./seventh/26.jpg")} alt="26" className="practice1"/> 
                <img src={require("./seventh/27.jpg")} alt="27" className="practice1"/> 
                <img src={require("./seventh/28.jpg")} alt="28" className="practice1"/> 
                <img src={require("./seventh/29.jpg")} alt="29" className="practice1"/> 
                <img src={require("./seventh/30.jpg")} alt="30" className="practice1"/> 

            </div>

            </div>

        </div>
    )
}

export default QuasiPredicatesLogicInfo