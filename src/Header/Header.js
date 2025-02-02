import "./Header.css";
import { FiBox } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

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
              placeHolder="Type any cryptocurrency..."
            ></input>
          </div>
        </div>
      </div>
      <div className="admin"></div>
    </div>
  );
};
export default Header;
