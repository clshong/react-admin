import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {  Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {LayoutHeader} from './components/index'
import { useGlobalStore } from "~/stores";

const { Header, Sider, Content } = Layout;

const items = [
  {
    label: "home",
    path: "/home"
  },
  {
    label: "about",
    path: "/about"
  },
  {
    label: "hotnews",
    path: "/hotnews"
  }
].map(nav => ({
  key: nav.path,
  icon: <UserOutlined />,
  label: nav.label
}));

const BasicLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const collapsed = useGlobalStore(state => state.collapsed);

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 200
          }}
        >
          <img src="~/assets/react.svg" alt="" />
          </div>
        <Menu mode="inline" defaultSelectedKeys={[pathname]} items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout style={{ display: "flex", flexDirection: "column" }}>
        <Header style={{ background: "#fff", padding: 0 }}>
         <LayoutHeader />
        </Header>
        <Content style={{ padding: "16px", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
