import React from "react";
import CounterPage from "../components/page";

const DashboardPage = () => {
    console.log("Dashboard page rendered");
  return (
    <div>
        <h2>Dashboard Page</h2>
        <CounterPage></CounterPage>
      <ul>
        <li>
          <h2>Dashboard </h2>
        </li>
        <li>
          <h2>Your Dashboard</h2>
        </li>
        <li>
          <h2>Their Dashboard</h2>
        </li>
      </ul>
    </div>
  );
};

export default DashboardPage;
