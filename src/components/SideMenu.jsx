import {Layout, Menu} from "antd";
import {BarChartOutlined} from "@ant-design/icons";
import React from "react";

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
const siderStyle = {
  // overflow: 'auto',
  height: 'auto',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

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