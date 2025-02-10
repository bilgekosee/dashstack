import "./Information.css";
import { VscTriangleRight } from "react-icons/vsc";

const data = [
  { name: "ALL" },
  { name: "BTC" },
  { name: "ETH" },
  { name: "XRP" },
  { name: "XEM" },
  { name: "LSK" },
  { name: "BTH" },
  { name: "FCT" },
  { name: "ETC" },
  { name: "JPY" },
];

const activities = [
  {
    date: "2018/10/02 10:57:46",
    detail: "Deposit Japanese Yen",
    price: "+10,000 JPY",
  },
  {
    date: "2018/10/10 10:57:46",
    detail: "Bought Bitcoin",
    price: "+ 0.00018147 BTC",
  },
  { date: "2018/10/10 10:57:46", detail: "Service fee", price: "- 500 JPY" },
];

const newsFeed = [
  {
    date: "Today 11.36",
    title:
      "Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users",
    desc: "Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…",
    category: "Security",
  },
  {
    date: "Yesterday",
    title:
      "Ripple News Today: Ripple is planning to upgrade the technology of the cryptocurrency",
    desc: "Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…",
    category: "Finance",
  },
];

const InformationDash = () => {
  return (
    <div className="information-container">
      <div className="information-dashstack-left">
        <span className="latestActivities">
          <VscTriangleRight className="triangle" />
          Latest Activities
        </span>

        <div className="coinName">
          {data.map((item, index) => (
            <button key={index} className={index === 2 ? "active" : ""}>
              {item.name}
            </button>
          ))}
        </div>

        <div className="activities">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Detail</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.date}</td>
                  <td>{activity.detail}</td>
                  <td className="price">{activity.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="information-dashstack-right">
        <div className="information-dashstack-left">
          <div className="newsfeed">
            <span className="latestActivities">
              <VscTriangleRight className="triangle" />
              Crypto Newsfeed
            </span>
            <button>Subscribe</button>
          </div>
          <div className="newsfeedCoin">
            {newsFeed.map((item, index) => (
              <div key={index} className="newsCard">
                <div className="newsContent">
                  <div className="newsDate">{item.date}</div>
                  <h3 className="newsTitle">{item.title}</h3>
                  <p className="newsDesc">{item.desc}</p>
                </div>
                <div className="newsCategory">
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDash;
