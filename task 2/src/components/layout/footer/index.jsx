// libraries
import React from "react";
// assets
import { ReactComponent as Viber } from "../../../assets/viber.svg";
import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/telegram.svg";
import {
  firstFooterList,
  secondFooterList,
  thirdFooterList,
  thirdFooterListMobile,
} from "../../../constans/constants";

const Footer = () => {
  const renderListElements = (array) =>
    array.map((text) => (
      <li key={text} className="footer-list-element">
        <a href="#">{text}</a>
      </li>
    ));

  return (
    <footer className="footer">
      <div className="footer-left-content">
        <div className="first-footer-content">
          <h3 className="footer-header">О компании</h3>
          <ul className="footer-list">{renderListElements(firstFooterList)}</ul>
        </div>
        <div className="second-footer-content">
          <h3 className="footer-header">Меню</h3>
          <div className="list-pair">
            <ul className="footer-list left">
              {renderListElements(secondFooterList)}
            </ul>
            <ul className="footer-list right">
              {window.innerWidth > 768
                ? renderListElements(thirdFooterList)
                : renderListElements(thirdFooterListMobile)}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-right-content">
        <h3 className="footer-header">Контакты</h3>
        <p className="footer-right-content-text">+7 555 555-55-55</p>
        <div className="footer-icons">
          <a href="https://web.telegram.org/">
            <Telegram className="footer-mobile-icon footer-icon-padding" />
          </a>
          <a href="https://www.viber.com/">
            <Viber className="footer-mobile-icon footer-icon-padding" />
          </a>
          <a href="https://www.whatsapp.com/">
            <Whatsapp className="footer-mobile-icon" />
          </a>
        </div>
        <p className="footer-right-content-address">
          Москва, Путевой проезд 3с1, к 902
        </p>
        <div className="footer-right-reserved-text">
          ©WELBEX {new Date().getFullYear()}. Все права защищены.
        </div>
        <a className="footer-privacy-policy" href="#">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
