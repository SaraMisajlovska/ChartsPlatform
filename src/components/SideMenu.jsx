import {Layout, Menu} from "antd";
import {BarChartOutlined} from "@ant-design/icons";
import React from "react";
import {siderStyle} from "/src/assets/CommonConstants.js";

const { Sider} = Layout;

const items = [
  BarChartOutlined,
  BarChartOutlined,
  BarChartOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `Store ${index + 1}`,
}));

const SideMenu = ({collapsed}) => {

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
        <div className="demo-logo-vertical"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
    </Layout>
  );
}
export default SideMenu;