import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, "/"),
  getItem(<Link to="/login">Login</Link>, "/login"),
  getItem(<Link to="/signup">Signup</Link>, "/signup"),
  getItem(<Link to="/cart">Cart</Link>, "/cart"),
];

const AppLayout: React.FC = ({ children }: any) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <div className="demo-logo">Ecommerce</div>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "80vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        elegance emporium ©{new Date().getFullYear()} Created by Subas Ghimire
      </Footer>
    </Layout>
  );
};

export default AppLayout;
