// libraries
import React from "react";

const Home = () => {
  const rightContentMobile = () => {
    return (
      <div className="main-mobile-content">
        <ul className="main-mobile-list-left">
          <li className="main-mobile-list-element">Skype аудит</li>
          <li className="main-mobile-list-element">Dashboard</li>
        </ul>

        <ul className="main-mobile-list-right">
          <li className="main-mobile-list-element">30 виджетов</li>
          <li className="main-mobile-list-element">Месяц аmoCRM</li>
        </ul>
      </div>
    );
  };

  const rightContentDesktop = () => {
    return (
      <div className='right-display'>
        <div className="right-content-first-line">
          <div className="first-content-padding">
            <h2 className="right-content-headings">Виджеты</h2>
            <div className="right-content-info">
              30 готовых
              <br /> решений
            </div>
          </div>
          <div>
            <h2 className="right-content-headings">Dashboard</h2>
            <div className="right-content-info">
              с показателями
              <br />
              вашего бизнеса
            </div>
          </div>
        </div>
        <div className="right-content-second-line">
          <div className="second-content-padding">
            <h2 className="right-content-headings">Skype Аудит</h2>
            <div className="right-content-info">
              отдела продаж
              <br />и CRM системы
            </div>
          </div>
          <div>
            <h2 className="right-content-headings">35 дней</h2>
            <div className="right-content-info">
              использования
              <br />
              CRM
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="home">
      <div className="left-content">
        <div className="left-content-text">Зарабатывайте больше</div>
        <div className="left-content-gradient-text">с WELBEX</div>
        <div className="left-content-gradient-under-text">
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className="right-content">
        <div className="right-content-text">
          Вместе с{" "}
          <span className="right-content-text-gradient">
            бесплатной
            <br /> консультацией
          </span>{" "}
          мы дарим:
        </div>
        <div className="right-content-box">
          {rightContentMobile()}
          {rightContentDesktop()}
        </div>
        <button className="right-content-button">Получить консультацию</button>
      </div>
    </main>
  );
};

export default Home;
