import { Col, Layout, Row, Spin, theme } from "antd";
import React from "react";
import WordFrequenciesChart from "/src/components/charts/WordFrequenciesChart.jsx";
import CheckoutAbandonmentChart from "/src/components/charts/CheckoutAbandonmentChart.jsx";
import useTopWords from "/src/components/hooks/useTopWords.js";
import useFetchDataWithTimePeriod from "/src/components/hooks/useFetchDataWithTimePeriod.js";
import { fetchProductViews } from "/src/services/ProductViewService.js";
import { fetchAbandonedReasonsAndProducts } from "/src/services/CheckoutAbandonmentService.js";
import ViewsPerCategoryChart from "/src/components/charts/ViewsPerCategoryChart.jsx";

const { Content } = Layout;

const Charts = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { fromDate, toDate, filterType } = props;
  const { topWords, loading: frequenciesLoading } = useTopWords(
    fromDate,
    toDate,
  );
  const { data: abandonedReasonsAndProducts, loading: abandonedLoading } =
    useFetchDataWithTimePeriod(
      fromDate,
      toDate,
      filterType,
      fetchAbandonedReasonsAndProducts,
    );
  const { data: productViews, loading: productLoading } =
    useFetchDataWithTimePeriod(fromDate, toDate, filterType, fetchProductViews);

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
            {!frequenciesLoading ? (
              <WordFrequenciesChart
                data={topWords}
                legendPosition={"left"}
                filterType={filterType}
              />
            ) : (
              <div className="spinner-wrapper">
                <Spin />
              </div>
            )}
          </Col>
          <Col span={11} className={"col-style"}>
            {!productLoading ? (
              <ViewsPerCategoryChart data={productViews} legendPosition={"left"} />
            ) : (
              <div className="spinner-wrapper">
                <Spin />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Charts;
