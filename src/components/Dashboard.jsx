import React, {useState} from 'react';

import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {Button, Layout, theme} from 'antd';
import SideMenu from "./SideMenu.jsx";
import Charts from "./Charts.jsx";

const {Header, Footer} = Layout;

const Dashboard = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{margin: '-10px'}}>
      <SideMenu collapsed={collapsed}/>
      <Layout style={{marginInlineStart: collapsed ? 80 : 200}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            margin: '6px 16px 0',
            overflow: 'initial',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          User activity charts
        </Header>
        <Charts/>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Diploma thesis {new Date().getFullYear()} Created by Sara Misajlovska
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;