import {Button, Layout, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import Charts from "/src/components/Charts.jsx";
import React, {useEffect, useState} from "react";
import {buttonStyle, footerStyle, headerStyleWithProps} from "/src/assets/CommonConstants.js";
import PeriodFilter from "/src/components/PeriodFilter.jsx";
import {gray} from "@ant-design/colors";
import {getDayStartEnd, getMonthStartEnd, getQuarterStartEnd, getYearStartEnd} from "/src/assets/DateUtils.js";

const {Header, Footer} = Layout;

const MainContent = (props) => {

  const {
    collapsed,
    setCollapsed
  } = props;

  const [filterType, setFilterType] = useState('month');
  const [date, setDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  useEffect(() => {
    extractDatesFromFilter();
  }, [date]);

  const extractDatesFromFilter = () => {
    switch (filterType) {
      case 'date':
        setFromToDates(getDayStartEnd, date);
        break;
      case 'month':
        setFromToDates(getMonthStartEnd, date);
        break;
      case 'quarter':
        setFromToDates(getQuarterStartEnd, date);
        break;
      case 'year':
        setFromToDates(getYearStartEnd, date);
    }
  }

  const setFromToDates = (getStartEnd, date) => {
    const {firstDay, lastDay} = getStartEnd(date);
    setFromDate(firstDay);
    setToDate(lastDay);
  }

  return (
    <Layout style={{marginInlineStart: collapsed ? 80 : 200}}>
      <Header style={headerStyleWithProps(colorBgContainer, borderRadiusLG)}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          onClick={() => setCollapsed(!collapsed)}
          style={buttonStyle}
        />

        <h1 style={{color: gray[4]}}>User activity charts</h1>

        <PeriodFilter type={filterType} setType={setFilterType} setPeriod={setDate}/>
      </Header>

      <Charts fromDate={fromDate} toDate={toDate} filterType={filterType}/>

      <Footer style={footerStyle}>
        Diploma thesis | Created by Sara Misajlovska | {new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}

export default MainContent;