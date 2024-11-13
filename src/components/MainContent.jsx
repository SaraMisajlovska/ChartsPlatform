import {Button, Layout, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import Charts from "/src/components/Charts.jsx";
import React, {useState} from "react";
import {buttonStyle, footerStyle, headerStyleWithProps} from "/src/assets/CommonConstants.js";
import PeriodFilter from "/src/components/PeriodFilter.jsx";
import {gray} from "@ant-design/colors";

const {Header, Footer} = Layout;

const MainContent = (props) => {

  const {
    collapsed,
    setCollapsed
  } = props;
  const [filterType, setFilterType] = useState('month');
  const [period, setPeriod] = useState(null);

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

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

        <PeriodFilter type={filterType} setType={setFilterType} setPeriod={setPeriod}/>
      </Header>

      <Charts period={period}/>

      <Footer style={footerStyle}>
        Diploma thesis | Created by Sara Misajlovska | {new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}

export default MainContent;