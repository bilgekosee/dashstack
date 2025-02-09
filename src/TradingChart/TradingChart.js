import { React, useState, PureComponent } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiRipple, SiFactom, SiLisk, SiNem } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BiSort } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./TradingChart.css";

const marketData = [
  {
    name: "BTC",
    price: 721882,
    change: -4.66,
    icon: <FaBitcoin />,
    color: "#f7931a",
  },
  {
    name: "BCH",
    price: 48676,
    change: 0.38,
    icon: <FaCoins />,
    color: "#ff8800",
  },
  {
    name: "ETH",
    price: 22370,
    change: 0.45,
    icon: <FaEthereum />,
    color: "#627eea",
  },
  {
    name: "LTC",
    price: 5788.5,
    change: -0.23,
    icon: <FaCoins />,
    color: "#345c9c",
  },
  {
    name: "ETC",
    price: 1660.7,
    change: -0.09,
    icon: <FaCoins />,
    color: "#34c759",
  },
  {
    name: "XRP",
    price: 50.839,
    change: 0.66,
    icon: <SiRipple />,
    color: "#0057ff",
  },
  {
    name: "FCT",
    price: 50.839,
    change: 0.66,
    icon: <FaCoins />, // Alternatif olarak genel bir ikon kullanıyoruz
    color: "#2babe4",
  },
  {
    name: "LSK",
    price: 321.14,
    change: -0.47,
    icon: <FaCoins />,
    color: "#0d4ea0",
  },
  {
    name: "XEM",
    price: 10.604,
    change: -1.07,
    icon: <FaCoins />,
    color: "#67b2e8",
  },
];

const data = [
  {
    name: "00:00",
    open: 721500,
    close: 719000,
  },
  {
    name: "01:00",
    open: 719000,
    close: 723500,
  },
  {
    name: "02:00",
    open: 723500,
    close: 718500,
  },
  {
    name: "03:00",
    open: 718500,
    close: 725000,
  },
  {
    name: "04:00",
    open: 725000,
    close: 722000,
  },
  {
    name: "05:00",
    open: 722000,
    close: 726500,
  },
  {
    name: "06:00",
    open: 726500,
    close: 721800,
  },
  {
    name: "07:00",
    open: 721800,
    close: 727500,
  },
  {
    name: "08:00",
    open: 727500,
    close: 724000,
  },
];

const options = [
  { value: "BTC", label: "JPY" },
  { value: "ETH", label: "JPY" },
  { value: "XEM", label: "JPY" },
  { value: "XRP", label: "JPY" },
];

const TradingChart = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(options[0]);

  const handleSelectChange = (event) => {
    const selected = options.find(
      (crypto) => crypto.value === event.target.value
    );
    setSelectedCrypto(selected);
  };
  const CustomizedDot = (props) => {
    const { cx, cy, payload } = props;
    const { open, close } = payload;

    if (close > open) {
      return (
        <svg
          x={cx - 10}
          y={cy - 10}
          width={20}
          height={20}
          fill="red"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      );
    }

    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  };

  return (
    <div className="main-container-trading">
      <div className="trading-market">
        <div className="trading-container">
          <div className="trading-header">
            <select
              className="trading-title"
              value={selectedCrypto.value}
              onChange={handleSelectChange}
            >
              {options.map((crypto) => (
                <option key={crypto.value} value={crypto.value}>
                  {crypto.value} / {crypto.label}
                </option>
              ))}
            </select>
            <button className="buy-button">BUY</button>
          </div>

          <div className="trading-details">
            <h1 className="trading-price-trading">721,882</h1>
            <span className="trading-change negative">-4.66% ↓</span>
            <div className="trading-stats">
              <span className="spanTotal">
                <span className="span-value-name">High:</span>725,974
              </span>
              <span className="spanTotal">
                <span className="span-value-name">Low:</span> 718,000
              </span>
              <span className="spanTotal">
                <span className="span-value-name">24h Volume:</span>677.7 BTC
              </span>
            </div>
            <div className="price-alert">
              Price Alert <IoNotificationsCircleOutline size={"18px"} />
            </div>
          </div>

          <div className="time-filters">
            {["1 min", "5 min", "15 min", "1 hr", "4 hr", "1 day"].map(
              (time, index) => (
                <button key={index} className={index === 3 ? "active" : ""}>
                  {time}
                </button>
              )
            )}
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  dataKey="close"
                  domain={["dataMin - 500", "dataMax + 500"]}
                />{" "}
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="close"
                  stroke="#39D3EC"
                  dot={<CustomizedDot />}
                />
                <Line
                  type="monotone"
                  dataKey="open"
                  stroke="#9D7FFE"
                  dot={<CustomizedDot />}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="market-cap">
          <div className="market-sort">
            <h3> Market Cap</h3>
            <BiSort />
          </div>

          <ul>
            {marketData.map((coin, index) => (
              <li key={index} className="market-item">
                <span
                  className="market-icon"
                  style={{ backgroundColor: coin.color }}
                >
                  {coin.icon}
                </span>
                <span className="market-name">{coin.name}</span>
                <span className="market-price">
                  ¥ {coin.price.toLocaleString()}
                </span>
                <span
                  className={`market-change ${
                    coin.change < 0 ? "negative" : "positive"
                  }`}
                >
                  {coin.change}% {coin.change < 0 ? "↓" : "↑"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TradingChart;
