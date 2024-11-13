import React, {useState} from 'react';
import {Layout} from 'antd';
import SideMenu from "./SideMenu.jsx";
import MainContent from "./MainContent.jsx";
import {
  CategoryScale,
  Chart as ChartJS,
  defaults,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
//Applies to all charts
defaults.maintainAspectRatio = false;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{margin: '-10px'}}>
      <SideMenu collapsed={collapsed}/>
      <MainContent collapsed={collapsed} setCollapsed={setCollapsed}/>
    </Layout>
  );
};
export default Dashboard;