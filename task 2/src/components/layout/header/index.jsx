// libraries
import React from "react";
// assets
import { ReactComponent as Viber } from "../../../assets/viber.svg";
import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/telegram.svg";
import { ReactComponent as Logo } from "../../../assets/logo_welbex.svg";
// constants
import {
  desktopHeaderNavElement,
  mobileHeaderNavElement,
} from "../../../constans/constants";

const Header = () => {
  const renderNavElements = (array, className) =>
    array.map((text) => (
      <a key={text} className={className} href="#">
        {text}
      </a>
    ));

  return (
    <header className="header">
      <div className="header-flex">
        <div>
          <Logo className="header-logo" />
        </div>

        <nav className="header-navigation">
          {renderNavElements(
            desktopHeaderNavElement,
            "header-navigation-element"
          )}
        </nav>
        <span className="header-number">+7 555 555-55-55</span>
        <div className="header-icons">
          <Telegram className="icon header-icons-padding" />
          <Viber className=" icon header-icons-padding" />
          <Whatsapp className="icon" />
        </div>
      </div>
      <div className="header-under-logo">
        крупный интегратор CRM
        <br /> в Росcии и ещё 8 странах
      </div>

      <nav className="header-mobile-navigation">
        {renderNavElements(
            mobileHeaderNavElement,
            "header-mobile-navigation-element"
        )}
      </nav>
    </header>
  );
};

export default Header;
