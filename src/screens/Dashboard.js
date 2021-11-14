import React from "react";
import "../assets/styles/App.css";
import Header from "../components/Header";
import { Doughnut } from "react-chartjs-2";
import DataChart from "../components/DataChart";

function Dashboard() {
  //Grab data from "API"
  const userData = [
    { value: 700, label: "Owners" },
    { value: 300, label: "Deactivated Users" },
    { value: 1000, label: "Standard Users" },
  ];

  const bookingsData = [
    { value: 900, label: "Paid" },
    { value: 100, label: "Cancelled" },
  ];
  return (
    <div id="dashboard-container">
      <Header />
      <div id="dashboard-items">
        <div>
          <input type="checkbox"></input>
          <span>Show Lifetime Data</span>
          <span> Date Range:</span>
        </div>
        <div id="dashboard-data">
          <div id="dashboard-data-left">
            <div className="data-row">
              <div>Registered Users</div>
              <div id="metric-amount"> 2000</div>
            </div>
            <div className="data-row">
              <div>Deactivated Users</div>
              <div id="metric-amount"> 300</div>
            </div>
            <div className="data-row">
              <div>Vehicles</div>
              <div id="metric-amount"> 500</div>
            </div>
            <div className="data-row">
              <div>Bookings</div>
              <div id="metric-amount"> 1000</div>
            </div>
            <div className="data-row">
              <div>Cancellations</div>
              <div id="metric-amount"> 200</div>
            </div>
            <div className="data-row">
              <div>Reviews</div>
              <div id="metric-amount"> 1000</div>
            </div>
            <div className="data-row">
              <div>Reports</div>
              <div id="metric-amount"> 300</div>
            </div>
          </div>
          <div id="dashboard-data-right">
            <DataChart data={userData} title={"Users"} />

            <DataChart data={bookingsData} title={"Bookings"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
