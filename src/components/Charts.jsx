import {Col, Layout, Row, theme} from "antd";
import React from "react";
import LineChart from "./charts/LineChart.jsx";
import BarChart from "./charts/BarChart.jsx";
import DoughnutChart from "./charts/DoughnutChart.jsx";
import AreaChart from "./charts/AreaChart.jsx";

const {Content} = Layout;

const Charts = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const activityData = [
    {timestamp: '2024-11-01', views: 150, addToCart: 30, cartAbandon: 20, searchQueries: 25},
    {timestamp: '2024-11-02', views: 180, addToCart: 40, cartAbandon: 25, searchQueries: 35},
    {timestamp: '2024-11-03', views: 200, addToCart: 50, cartAbandon: 30, searchQueries: 70},
    {timestamp: '2024-11-01', views: 150, addToCart: 30, cartAbandon: 20, searchQueries: 50},
    {timestamp: '2024-11-02', views: 180, addToCart: 40, cartAbandon: 25, searchQueries: 60},
    // Add more data...
  ];

  const pieData = {
    productViews: 500,
    addToCart: 120,
    cartAbandon: 90,
    searchQueries: 200,
  };

  return (
    <Content
      style={{
        margin: '24px 16px 0',
        overflow: 'initial',
      }}
    >
      <div
        style={{
          padding: 24,
          textAlign: 'center',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Row gutter={[24, 32]} className={'row-style'}>
          <Col span={24} className={'col-style'}>
              <LineChart data={activityData} legendPosition={'left'}/>
          </Col>
        </Row>
        <Row gutter={[24, 32]} className={'row-style'} justify={'space-between'}>
          <Col span={11} className={'col-style'}>
            <BarChart data={activityData} legendPosition={'left'}/>
          </Col>

          <Col span={11} className={'col-style'}>
            <DoughnutChart data={pieData} legendPosition={'right'}/>
          </Col>
        </Row>
        <Row gutter={[24, 32]} className={'row-style'}>
          <Col span={24} className={'col-style'}>
            <AreaChart data={activityData} legendPosition={'left'}/>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Charts;