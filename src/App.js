import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import CryptoDashboard from "./Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <SideBar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<CryptoDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
