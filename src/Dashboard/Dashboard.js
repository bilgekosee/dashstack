import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiRipple } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import "./Dashboard.css";
import TradingChart from "../TradingChart/TradingChart";
import InformationDash from "../Information/Information";

const data = [
  {
    name: "BTC",
    description: "Bitcoin",
    price: 721882,
    change: -4.66,
    icon: <FaBitcoin />,
    color: "#f7931a",
  },
  {
    name: "ETH",
    description: "Ethereum",
    price: 22370,
    change: 0.45,
    icon: <FaEthereum />,
    color: "#627eea",
  },
  {
    name: "XEM",
    description: "NEM",
    price: 10.604,
    change: -1.07,
    icon: <FaCoins />,
    color: "#00a8ff",
  },
  {
    name: "XRP",
    description: "Ripple",
    price: 50.839,
    change: 0.66,
    icon: <SiRipple />,
    color: "#0057ff",
  },
];

const chartData = [
  { value: 1 },
  { value: 3 },
  { value: 2 },
  { value: 5 },
  { value: 4 },
  { value: 6 },
  { value: 5 },
  { value: 7 },
];

const CryptoDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <span className="welcome-text">
          Welcome ▸ <span className="bold-text">Dashboard</span>
        </span>
        <div className="nav-icons">
          <IoGridOutline className="icon" />
          <IoChevronBackOutline className="icon" />
          <IoChevronForwardOutline className="icon" />
        </div>
      </div>

      <div className="crypto-cards">
        {data.map((crypto, index) => (
          <div key={index} className="crypto-card">
            <div className="crypto-header">
              <div className="icon-name">
                <div
                  className="crypto-icon"
                  style={{ backgroundColor: crypto.color }}
                >
                  {crypto.icon}
                </div>
                <div className="coinName">
                  <span className="crypto-name">{crypto.name}</span>
                  <span className="crypto-description">
                    {crypto.description}
                  </span>
                </div>
              </div>

              <span className="crypto-price">
                ¥ {crypto.price.toLocaleString()}
              </span>
            </div>

            <ResponsiveContainer width="100%" height={50}>
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={crypto.color}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <span
              className={`crypto-change ${
                crypto.change < 0 ? "negative" : "positive"
              }`}
            >
              {crypto.change}% {crypto.change < 0 ? "↓" : "↑"}
            </span>
          </div>
        ))}
      </div>
      <TradingChart />
      <InformationDash />
    </div>
  );
};

export default CryptoDashboard;
