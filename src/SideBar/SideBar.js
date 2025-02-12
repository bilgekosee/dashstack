import { useState } from "react";
import "./SideBar.css";
import { HiMiniHome } from "react-icons/hi2";
import {
  MdOutlineCurrencyExchange,
  MdNotificationsActive,
} from "react-icons/md";
import { IoWallet, IoSettingsSharp } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import {
  FaUniversity,
  FaQuestionCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaGift, FaPowerOff } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

const SideBar = () => {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const [openGift, setOpenGift] = useState(false);
  const [plan, setPlan] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sidebarContainer ${isOpen ? "open" : "closed"}`}>
      <div className="quicacces-part">
        <div className="quicspan">
          {isOpen && <span className="quicacces-title">Quick Access</span>}
          <div className="open-close-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
          </div>
        </div>
        <div className="quicacsess-section">
          <div
            className={`dashboard ${active === "Dashboard" ? "active" : ""}`}
            onClick={() => setActive("Dashboard")}
          >
            <HiMiniHome className="dashboard-icon" /> {isOpen && "Dashboard"}
          </div>
          <div
            className={`dashboard ${active === "Exchange" ? "active" : ""}`}
            onClick={() => setActive("Exchange")}
          >
            <MdOutlineCurrencyExchange className="dashboard-icon" />
            {isOpen && "Exchange"}
          </div>
          <div
            className={`dashboard ${active === "My Wallet" ? "active" : ""}`}
            onClick={() => setActive("My Wallet")}
          >
            <IoWallet className="dashboard-icon" /> {isOpen && "My Wallet"}
          </div>
          <div
            className={`dashboard ${active === "Tradeview" ? "active" : ""}`}
            onClick={() => setActive("Tradeview")}
          >
            <LuChartNoAxesCombined className="dashboard-icon" />
            {isOpen && "Tradeview"}
          </div>
        </div>
      </div>

      <div className="service-part">
        <div className="quicspan">
          <span className="quicacces-title">{isOpen && "Service"}</span>
        </div>

        <div
          className={`dashboard menu-item ${
            active === "Transactions" ? "active" : ""
          }`}
          onClick={() => {
            setActive("Transactions");
            setOpen(!open);
          }}
        >
          <FaUniversity className="menu-icon" />
          {isOpen && <span className="transactions">Transactions</span>}
          {isOpen && <span className="badgeServis">3</span>}
          {isOpen &&
            (open ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            ))}
        </div>

        {open && isOpen && (
          <ul className="submenu">
            <li>Buy & Sell Coin</li>
            <li>Deposit Yen</li>
            <li>Withdraw Yen</li>
            <li>Send Coin</li>
            <li>Receive Coin</li>
            <li>Deposit Coin</li>
          </ul>
        )}
      </div>
      <div className="service-part">
        <div
          className={`dashboard menu-item ${active === "gift" ? "active" : ""}`}
          onClick={() => {
            setActive("gift");
            setOpenGift(!openGift);
          }}
        >
          <FaGift className="menu-icon" />
          <span className="gift">{isOpen && "Rewards"}</span>

          {isOpen &&
            (openGift ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            ))}
        </div>
      </div>

      <div className="service-part">
        <div
          className={`dashboard menu-item ${active === "plan" ? "active" : ""}`}
          onClick={() => {
            setActive("plan");
            setPlan(!plan);
          }}
        >
          <HiLightBulb className="menu-icon" />
          <span className="plan">{isOpen && "Utility Plan"}</span>

          {isOpen &&
            (plan ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            ))}
        </div>
      </div>
      <div className="quicacces-part">
        <div className="quicspan">
          <span className="quicacces-title">{isOpen && "Account"}</span>
        </div>
        <div className="quicacsess-section">
          <div
            className={`dashboard ${
              active === "Notifications" ? "active" : ""
            }`}
            onClick={() => setActive("Notifications")}
          >
            <MdNotificationsActive className="dashboard-icon" />
            {isOpen && "Notifications"}
          </div>
          <div
            className={`dashboard ${active === "Settings" ? "active" : ""}`}
            onClick={() => setActive("Settings")}
          >
            <IoSettingsSharp className="dashboard-icon" />
            {isOpen && "Settings"}
          </div>
          <div
            className={`dashboard ${active === "FAQ" ? "active" : ""}`}
            onClick={() => setActive("FAQ")}
          >
            <FaQuestionCircle className="dashboard-icon" /> {isOpen && "FAQ"}
          </div>
        </div>
      </div>
      <div className="logout">
        <div className="logout-span">
          <FaPowerOff className="dashboard-icon" /> {isOpen && "Log Out"}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
