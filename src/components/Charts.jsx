import { Col, Layout, Row, Spin, theme } from "antd";
import React from "react";
import LineChart from "/src/components/charts/LineChart.jsx";
import WordFrequenciesChart from "/src/components/charts/WordFrequenciesChart.jsx";
import AreaChart from "/src/components/charts/AreaChart.jsx";
import CheckoutAbandonmentChart from "/src/components/charts/CheckoutAbandonmentChart.jsx";
import useTopWords from "/src/components/hooks/useTopWords.js";
import useAbandonedReasons from "/src/components/hooks/useAbandonedReasons.js";

const { Content } = Layout;
const activityData = [
  {
    timestamp: "2024-11-01",
    views: 150,
    addToCart: 30,
    cartAbandon: 20,
    searchQueries: 25,
  },
  {
    timestamp: "2024-11-02",
    views: 180,
    addToCart: 40,
    cartAbandon: 25,
    searchQueries: 35,
  },
  {
    timestamp: "2024-11-03",
    views: 200,
    addToCart: 50,
    cartAbandon: 30,
    searchQueries: 70,
  },
  {
    timestamp: "2024-11-01",
    views: 150,
    addToCart: 30,
    cartAbandon: 20,
    searchQueries: 50,
  },
  {
    timestamp: "2024-11-02",
    views: 180,
    addToCart: 40,
    cartAbandon: 25,
    searchQueries: 60,
  },
  // Add more data...
];

const Charts = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { fromDate, toDate, filterType } = props;
  const { topWords, loading: frequenciesLoading } = useTopWords(
    fromDate,
    toDate,
  );
  const { abandonedReasonsAndProducts, loading: abandonedLoading } =
    useAbandonedReasons(fromDate, toDate, filterType);

  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}
    >
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Row gutter={[24, 32]} className={"row-style"}>
          <Col span={24} className={"col-style"}>
            {!abandonedLoading ? (
              <CheckoutAbandonmentChart
                data={abandonedReasonsAndProducts}
                legendPosition={"left"}
              />
            ) : (
              <div className="spinner-wrapper">
                <Spin />
              </div>
            )}
          </Col>
        </Row>
        <Row
          gutter={[24, 32]}
          className={"row-style"}
          justify={"space-between"}
        >
          <Col span={11} className={"col-style"}>
            <AreaChart data={activityData} legendPosition={"left"} />
          </Col>

          <Col span={11} className={"col-style"}>
            {!frequenciesLoading ? (
              <WordFrequenciesChart
                data={topWords}
                legendPosition={"right"}
                filterType={filterType}
              />
            ) : (
              <div className="spinner-wrapper">
                <Spin />
              </div>
            )}
          </Col>
        </Row>
        <Row gutter={[24, 32]} className={"row-style"}>
          <Col span={24} className={"col-style"}>
            <LineChart data={activityData} legendPosition={"left"} />
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Charts;
