import {Col, Layout, Row, Spin, theme} from "antd";
import React, {useEffect, useState} from "react";
import LineChart from "/src/components/charts/LineChart.jsx";
import BarChart from "/src/components/charts/BarChart.jsx";
import DoughnutChart from "/src/components/charts/DoughnutChart.jsx";
import AreaChart from "/src/components/charts/AreaChart.jsx";
import {fetchTopWords} from "/src/services/WordFrequencyService.js";

const {Content} = Layout;
const activityData = [
  {timestamp: '2024-11-01', views: 150, addToCart: 30, cartAbandon: 20, searchQueries: 25},
  {timestamp: '2024-11-02', views: 180, addToCart: 40, cartAbandon: 25, searchQueries: 35},
  {timestamp: '2024-11-03', views: 200, addToCart: 50, cartAbandon: 30, searchQueries: 70},
  {timestamp: '2024-11-01', views: 150, addToCart: 30, cartAbandon: 20, searchQueries: 50},
  {timestamp: '2024-11-02', views: 180, addToCart: 40, cartAbandon: 25, searchQueries: 60},
  // Add more data...
];

const Charts = (props) => {

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const {fromDate, toDate, filterType} = props;

  const [topWords, setTopWords] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Object.keys(topWords).length === 0 ? setLoading(true) : setLoading(false)
  }, [topWords]);

  useEffect(() => {
    setLoading(true);
    const intervalId = setInterval(() =>
        fetchTopWords(5, fromDate, toDate)
          .then(words => {
            setTopWords(words)
          }),
      5000);
    return () => clearInterval(intervalId);
  }, [fromDate, toDate])

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
            <AreaChart data={activityData} legendPosition={'left'}/>
          </Col>

          <Col span={11} className={'col-style'}>
            {!loading ?
              <DoughnutChart data={topWords} legendPosition={'right'} filterType={filterType}/>
              :
              <div className="spinner-wrapper">
                <Spin />
              </div>
            }
          </Col>
        </Row>
        <Row gutter={[24, 32]} className={'row-style'}>
          <Col span={24} className={'col-style'}>
            <BarChart data={activityData} legendPosition={'left'} />
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Charts;