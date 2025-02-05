import "./Header.css";
import { FiBox } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlineNotificationAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="header-container">
      <div className="dash-stack">
        <div className="dash-title">
          <span>Dash</span>Stack
        </div>
        <div className="search-line">
          <div className="line-group">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="shopping-box">
            <FiBox size={25} color="#333" strokeWidth={1} />
          </div>
          <div className="search">
            <FaSearch className="faSearch" strokeWidth={1} />
            <input
              className="search-input"
              type="text"
              placeholder="Type any cryptocurrency..."
            />
          </div>
        </div>
      </div>
      <div className="dash-stack-right">
        <img
          className="profile-admin-photo"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />

        <div className="icon-container">
          <CiSettings className="setting-icon" />
        </div>

        <div className="icon-container">
          <MdOutlineNotificationAdd className="setting-icon" />
          <span className="badge">3</span>
        </div>

        <img
          className="flag"
          src="https://images.unsplash.com/photo-1562884328-39da45501a9c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="flag"
        />
      </div>
    </div>
  );
};

export default Header;
